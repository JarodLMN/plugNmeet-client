import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateBreakoutRoomsReq,
  BreakoutRoomRes,
  IncreaseBreakoutRoomDurationReq,
  BroadcastBreakoutRoomMsgReq,
  JoinBreakoutRoomReq,
  EndBreakoutRoomReq,
  BreakoutRoomResSchema,
  CreateBreakoutRoomsReqSchema,
  IncreaseBreakoutRoomDurationReqSchema,
  BroadcastBreakoutRoomMsgReqSchema,
  JoinBreakoutRoomReqSchema,
  EndBreakoutRoomReqSchema,
} from 'plugnmeet-protocol-js';
import { fromBinary, toBinary, toJson } from '@bufbuild/protobuf';

export const breakoutRoomApi = createApi({
  reducerPath: 'breakoutRoomApi',
  baseQuery: fetchBaseQuery({
    baseUrl: (window as any).PLUG_N_MEET_SERVER_URL + '/api/breakoutRoom',
    prepareHeaders: (headers, api) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const token = api.getState().session.token;
      headers.append('Authorization', token);
      headers.append('Content-Type', 'application/protobuf');
      return headers;
    },
  }),
  refetchOnMountOrArgChange: true,
  tagTypes: ['List', 'My_Rooms'],
  endpoints: (builder) => ({
    getBreakoutRooms: builder.query<BreakoutRoomRes, void>({
      query: () => {
        return {
          url: 'listRooms',
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      providesTags: ['List'],
    }),
    createBreakoutRooms: builder.mutation<
      BreakoutRoomRes,
      CreateBreakoutRoomsReq
    >({
      query(body) {
        return {
          url: 'create',
          method: 'POST',
          body: toBinary(CreateBreakoutRoomsReqSchema, body),
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      invalidatesTags: ['List'],
    }),
    increaseDuration: builder.mutation<
      BreakoutRoomRes,
      IncreaseBreakoutRoomDurationReq
    >({
      query(body) {
        return {
          url: 'increaseDuration',
          method: 'POST',
          body: toBinary(IncreaseBreakoutRoomDurationReqSchema, body),
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      invalidatesTags: ['List'],
    }),
    broadcastBreakoutRoomMsg: builder.mutation<
      BreakoutRoomRes,
      BroadcastBreakoutRoomMsgReq
    >({
      query(body) {
        return {
          url: 'sendMsg',
          method: 'POST',
          body: toBinary(BroadcastBreakoutRoomMsgReqSchema, body),
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
    }),
    joinRoom: builder.mutation<BreakoutRoomRes, JoinBreakoutRoomReq>({
      query(body) {
        return {
          url: 'join',
          method: 'POST',
          body: toBinary(JoinBreakoutRoomReqSchema, body),
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
    }),
    getMyBreakoutRooms: builder.query<BreakoutRoomRes, void>({
      query: () => {
        return {
          url: 'myRooms',
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      providesTags: ['My_Rooms'],
    }),
    endSingleRoom: builder.mutation<BreakoutRoomRes, EndBreakoutRoomReq>({
      query(body) {
        return {
          url: 'endRoom',
          method: 'POST',
          body: toBinary(EndBreakoutRoomReqSchema, body),
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      invalidatesTags: ['List'],
    }),
    endAllRooms: builder.mutation<BreakoutRoomRes, void>({
      query() {
        return {
          url: 'endAllRooms',
          method: 'POST',
          responseHandler: async (res) => {
            const buf = await res.arrayBuffer();
            const b = fromBinary(BreakoutRoomResSchema, new Uint8Array(buf));
            return toJson(BreakoutRoomResSchema, b);
          },
        };
      },
      invalidatesTags: ['List'],
    }),
  }),
});

export const {
  useGetBreakoutRoomsQuery,
  useCreateBreakoutRoomsMutation,
  useIncreaseDurationMutation,
  useJoinRoomMutation,
  useEndSingleRoomMutation,
  useEndAllRoomsMutation,
  useBroadcastBreakoutRoomMsgMutation,
  useGetMyBreakoutRoomsQuery,
} = breakoutRoomApi;
