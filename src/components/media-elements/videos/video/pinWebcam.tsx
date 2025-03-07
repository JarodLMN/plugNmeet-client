import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store';
import {
  participantsSelector,
  updateParticipant,
} from '../../../../store/slices/participantSlice';
import { doRefreshWebcams } from '../../../../store/slices/roomSettingsSlice';

interface IPinWebcamProps {
  userId: string;
}

const PinWebcam = ({ userId }: IPinWebcamProps) => {
  const dispatch = useAppDispatch();
  const pinWebcam = useAppSelector(
    (state) => participantsSelector.selectById(state, userId)?.pinWebcam,
  );

  const togglePin = () => {
    dispatch(
      updateParticipant({
        id: userId,
        changes: {
          pinWebcam: !pinWebcam,
        },
      }),
    );
    dispatch(doRefreshWebcams());
  };

  const render = useMemo(() => {
    return (
      <div className="pin-webcam cursor-pointer" onClick={togglePin}>
        {pinWebcam ? (
          <i className="pnm-pin text-white text-[12px]" />
        ) : (
          <i className="pnm-pin -rotate-90 text-white text-[12px]" />
        )}
      </div>
    );
    //eslint-disable-next-line
  }, [pinWebcam]);

  return <>{render}</>;
};

export default PinWebcam;
