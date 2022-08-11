// @generated by protoc-gen-es v0.0.10 with parameter "target=js+dts"
// @generated from file plugnmeet_breakout_room.proto (package plugnmeet, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf';
import { Message, proto3 } from '@bufbuild/protobuf';

/**
 * @generated from message plugnmeet.CreateBreakoutRoomsReq
 */
export declare class CreateBreakoutRoomsReq extends Message<CreateBreakoutRoomsReq> {
  /**
   * @generated from field: string room_id = 1;
   */
  roomId: string;

  /**
   * @generated from field: string requested_user_id = 2;
   */
  requestedUserId: string;

  /**
   * @generated from field: uint64 duration = 3;
   */
  duration: bigint;

  /**
   * @generated from field: optional string welcome_msg = 4;
   */
  welcomeMsg?: string;

  /**
   * @generated from field: repeated plugnmeet.BreakoutRoom rooms = 5;
   */
  rooms: BreakoutRoom[];

  constructor(data?: PartialMessage<CreateBreakoutRoomsReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.CreateBreakoutRoomsReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): CreateBreakoutRoomsReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): CreateBreakoutRoomsReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): CreateBreakoutRoomsReq;

  static equals(
    a:
      | CreateBreakoutRoomsReq
      | PlainMessage<CreateBreakoutRoomsReq>
      | undefined,
    b:
      | CreateBreakoutRoomsReq
      | PlainMessage<CreateBreakoutRoomsReq>
      | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.BreakoutRoom
 */
export declare class BreakoutRoom extends Message<BreakoutRoom> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * @generated from field: uint64 duration = 3;
   */
  duration: bigint;

  /**
   * @generated from field: bool started = 4;
   */
  started: boolean;

  /**
   * @generated from field: uint64 created = 5;
   */
  created: bigint;

  /**
   * @generated from field: repeated plugnmeet.BreakoutRoomUser users = 6;
   */
  users: BreakoutRoomUser[];

  constructor(data?: PartialMessage<BreakoutRoom>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoom';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoom;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoom;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoom;

  static equals(
    a: BreakoutRoom | PlainMessage<BreakoutRoom> | undefined,
    b: BreakoutRoom | PlainMessage<BreakoutRoom> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.BreakoutRoomUser
 */
export declare class BreakoutRoomUser extends Message<BreakoutRoomUser> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: bool joined = 3;
   */
  joined: boolean;

  constructor(data?: PartialMessage<BreakoutRoomUser>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoomUser';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoomUser;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomUser;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomUser;

  static equals(
    a: BreakoutRoomUser | PlainMessage<BreakoutRoomUser> | undefined,
    b: BreakoutRoomUser | PlainMessage<BreakoutRoomUser> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.IncreaseBreakoutRoomDurationReq
 */
export declare class IncreaseBreakoutRoomDurationReq extends Message<IncreaseBreakoutRoomDurationReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId: string;

  /**
   * @generated from field: uint64 duration = 2;
   */
  duration: bigint;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  constructor(data?: PartialMessage<IncreaseBreakoutRoomDurationReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.IncreaseBreakoutRoomDurationReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): IncreaseBreakoutRoomDurationReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): IncreaseBreakoutRoomDurationReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): IncreaseBreakoutRoomDurationReq;

  static equals(
    a:
      | IncreaseBreakoutRoomDurationReq
      | PlainMessage<IncreaseBreakoutRoomDurationReq>
      | undefined,
    b:
      | IncreaseBreakoutRoomDurationReq
      | PlainMessage<IncreaseBreakoutRoomDurationReq>
      | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.BroadcastBreakoutRoomMsgReq
 */
export declare class BroadcastBreakoutRoomMsgReq extends Message<BroadcastBreakoutRoomMsgReq> {
  /**
   * @generated from field: string msg = 1;
   */
  msg: string;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  constructor(data?: PartialMessage<BroadcastBreakoutRoomMsgReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.BroadcastBreakoutRoomMsgReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BroadcastBreakoutRoomMsgReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BroadcastBreakoutRoomMsgReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BroadcastBreakoutRoomMsgReq;

  static equals(
    a:
      | BroadcastBreakoutRoomMsgReq
      | PlainMessage<BroadcastBreakoutRoomMsgReq>
      | undefined,
    b:
      | BroadcastBreakoutRoomMsgReq
      | PlainMessage<BroadcastBreakoutRoomMsgReq>
      | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.JoinBreakoutRoomReq
 */
export declare class JoinBreakoutRoomReq extends Message<JoinBreakoutRoomReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  /**
   * @generated from field: bool is_admin = 4;
   */
  isAdmin: boolean;

  constructor(data?: PartialMessage<JoinBreakoutRoomReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.JoinBreakoutRoomReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): JoinBreakoutRoomReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): JoinBreakoutRoomReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): JoinBreakoutRoomReq;

  static equals(
    a: JoinBreakoutRoomReq | PlainMessage<JoinBreakoutRoomReq> | undefined,
    b: JoinBreakoutRoomReq | PlainMessage<JoinBreakoutRoomReq> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.EndBreakoutRoomReq
 */
export declare class EndBreakoutRoomReq extends Message<EndBreakoutRoomReq> {
  /**
   * @generated from field: string breakout_room_id = 1;
   */
  breakoutRoomId: string;

  /**
   * @generated from field: string room_id = 3;
   */
  roomId: string;

  constructor(data?: PartialMessage<EndBreakoutRoomReq>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.EndBreakoutRoomReq';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): EndBreakoutRoomReq;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): EndBreakoutRoomReq;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): EndBreakoutRoomReq;

  static equals(
    a: EndBreakoutRoomReq | PlainMessage<EndBreakoutRoomReq> | undefined,
    b: EndBreakoutRoomReq | PlainMessage<EndBreakoutRoomReq> | undefined,
  ): boolean;
}

/**
 * @generated from message plugnmeet.BreakoutRoomRes
 */
export declare class BreakoutRoomRes extends Message<BreakoutRoomRes> {
  /**
   * @generated from field: bool status = 1;
   */
  status: boolean;

  /**
   * @generated from field: string msg = 2;
   */
  msg: string;

  /**
   * join token
   *
   * @generated from field: optional string token = 3;
   */
  token?: string;

  /**
   * for my breakout room
   *
   * @generated from field: optional plugnmeet.BreakoutRoom room = 4;
   */
  room?: BreakoutRoom;

  /**
   * rooms list
   *
   * @generated from field: repeated plugnmeet.BreakoutRoom rooms = 5;
   */
  rooms: BreakoutRoom[];

  constructor(data?: PartialMessage<BreakoutRoomRes>);

  static readonly runtime: typeof proto3;
  static readonly typeName = 'plugnmeet.BreakoutRoomRes';
  static readonly fields: FieldList;

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>,
  ): BreakoutRoomRes;

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomRes;

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>,
  ): BreakoutRoomRes;

  static equals(
    a: BreakoutRoomRes | PlainMessage<BreakoutRoomRes> | undefined,
    b: BreakoutRoomRes | PlainMessage<BreakoutRoomRes> | undefined,
  ): boolean;
}
