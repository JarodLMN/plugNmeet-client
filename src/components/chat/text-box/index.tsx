import React, { useState, useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import sanitizeHtml from 'sanitize-html';
import { Room } from 'livekit-client';
import { isEmpty } from 'validator';
import { useTranslation } from 'react-i18next';

import {
  useAppSelector,
  RootState,
  store,
  useAppDispatch,
} from '../../../store';
import {
  DataMessageType,
  IChatMsg,
  IDataMessage,
} from '../../../store/slices/interfaces/dataMessages';
import {
  isSocketConnected,
  sendWebsocketMessage,
} from '../../../helpers/websocket';
import { IRoomMetadata } from '../../../store/slices/interfaces/session';
import FileSend from './fileSend';
import { updateInitiatePrivateChat } from '../../../store/slices/roomSettingsSlice';

interface ITextBoxAreaProps {
  currentRoom: Room;
}
const isChatServiceReadySelector = createSelector(
  (state: RootState) => state.session.isChatServiceReady,
  (isChatServiceReady) => isChatServiceReady,
);

const isLockChatSendMsgSelector = createSelector(
  (state: RootState) =>
    state.session.currentUser?.metadata?.lock_settings.lock_chat_send_message,
  (lock_chat_send_message) => lock_chat_send_message,
);

const isLockSendFileSelector = createSelector(
  (state: RootState) =>
    state.session.currentUser?.metadata?.lock_settings.lock_chat_file_share,
  (lock_chat_file_share) => lock_chat_file_share,
);

const selectedChatTabSelector = createSelector(
  (state: RootState) => state.roomSettings.selectedChatTab,
  (selectedChatTab) => selectedChatTab,
);
const initiatePrivateChatSelector = createSelector(
  (state: RootState) => state.roomSettings.initiatePrivateChat,
  (initiatePrivateChat) => initiatePrivateChat,
);

const TextBoxArea = ({ currentRoom }: ITextBoxAreaProps) => {
  const isChatServiceReady = useAppSelector(isChatServiceReadySelector);
  const isLockChatSendMsg = useAppSelector(isLockChatSendMsgSelector);
  const isLockSendFile = useAppSelector(isLockSendFileSelector);
  const selectedChatTab = useAppSelector(selectedChatTabSelector);
  const initiatePrivateChat = useAppSelector(initiatePrivateChatSelector);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const [lockSendMsg, setLockSendMsg] = useState<boolean>(false);
  const [lockSendFile, setLockSendFile] = useState<boolean>(false);
  const [showSendFile, setShowSendFile] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');
  const [sendTo, setSendTo] = useState<string>('public');

  useEffect(() => {
    const metadata = store.getState().session.currentRoom
      .metadata as IRoomMetadata;

    if (!metadata.room_features.chat_features.allow_file_upload) {
      setShowSendFile(false);
    }
  }, []);

  useEffect(() => {
    if (initiatePrivateChat.userId !== '') {
      setSendTo(initiatePrivateChat.userId);
    } else {
      setSendTo(selectedChatTab.userId);
    }
  }, [selectedChatTab, initiatePrivateChat]);

  useEffect(() => {
    if (isLockChatSendMsg) {
      setLockSendMsg(true);
    } else {
      setLockSendMsg(false);
    }
    if (isLockSendFile) {
      setLockSendFile(true);
    } else {
      setLockSendFile(false);
    }
  }, [isLockChatSendMsg, isLockSendFile]);

  // default room lock settings
  useEffect(() => {
    const lock_chat_send_message =
      store.getState().session.currentRoom.metadata?.default_lock_settings
        ?.lock_chat_send_message;
    const lock_chat_file_share =
      store.getState().session.currentRoom.metadata?.default_lock_settings
        ?.lock_chat_file_share;

    const isAdmin = store.getState().session.currentUser?.metadata?.is_admin;

    if (lock_chat_send_message && !isAdmin) {
      if (isLockChatSendMsg !== false) {
        setLockSendMsg(true);
      }
    }
    if (lock_chat_file_share && !isAdmin) {
      if (isLockChatSendMsg !== false) {
        setLockSendFile(true);
      }
    }
    // eslint-disable-next-line
  }, []);

  const cleanHtml = (rawText) => {
    return sanitizeHtml(rawText, {
      allowedTags: ['b', 'i', 'strong', 'br'],
      allowedSchemes: ['mailto', 'tel'],
    });
  };

  const sendMsg = async () => {
    const msg = cleanHtml(message);

    if (isEmpty(msg)) {
      return;
    }

    const info: IChatMsg = {
      type: 'CHAT',
      isPrivate: sendTo !== 'public',
      time: '',
      message_id: '',
      from: {
        sid: currentRoom.localParticipant.sid,
        userId: currentRoom.localParticipant.identity,
        name: currentRoom.localParticipant.name,
      },
      msg: msg.replace(/\r?\n/g, '<br />'),
    };

    const data: IDataMessage = {
      type: DataMessageType.USER,
      room_sid: currentRoom.sid,
      to: sendTo !== 'public' ? sendTo : '',
      message_id: '',
      body: info,
    };

    if (isSocketConnected()) {
      sendWebsocketMessage(JSON.stringify(data));
      setMessage('');
      if (initiatePrivateChat.userId !== '') {
        dispatch(
          updateInitiatePrivateChat({
            userId: '',
            name: '',
          }),
        );
      }
    }
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      sendMsg();
    }
  };

  return (
    <div className="flex items-start justify-between h-[4.5rem] p-2">
      <textarea
        name="message-textarea"
        id="message-textarea"
        className="w-full bg-white h-14 max-h-14 mt-1 leading-[1.2] rounded-xl py-2 px-4 outline-none text-xs lg:text-sm primaryColor placeholder:text-primaryColor/70"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        disabled={!isChatServiceReady || lockSendMsg}
        placeholder={t('right-panel.chat-box-placeholder')}
        onKeyDown={(e) => onEnterPress(e)}
      />
      <div className="btns">
        <button
          disabled={!isChatServiceReady || lockSendMsg}
          onClick={() => sendMsg()}
          className="w-4 h-6 p-2"
        >
          <i className="pnm-send primaryColor text-[20px]" />
        </button>

        {showSendFile ? (
          <FileSend
            isChatServiceReady={isChatServiceReady}
            lockSendFile={lockSendFile}
            currentRoom={currentRoom}
          />
        ) : null}
      </div>
    </div>
  );
};

export default TextBoxArea;
