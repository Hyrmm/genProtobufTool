export const protoId2Name: { [protoId: number]: string } = {
    1001: "S2C_Login",
    1003: "S2C_Frames",
    1004: "C2S_Frames",
    1006: "S2C_PlayerJoin",
    1007: "S2C_PlayerLeave",
    1008: "S2C_HeartBeat",
    1009: "C2S_HeartBeat"
}

export const protoName2Id: { [protoName: string]: number } = {
    S2C_Login: 1001,
    S2C_Frames: 1003,
    C2S_Frames: 1004,
    S2C_PlayerJoin: 1006,
    S2C_PlayerLeave: 1007,
    S2C_HeartBeat: 1008,
    C2S_HeartBeat: 1009
}

export enum EnumProtoId {
    S2C_Login = 1001,
    S2C_Frames = 1003,
    C2S_Frames = 1004,
    S2C_PlayerJoin = 1006,
    S2C_PlayerLeave = 1007,
    S2C_HeartBeat = 1008,
    C2S_HeartBeat = 1009
}

export enum EnumProtoName {
    S2C_Login = "S2C_Login",
    S2C_Frames = "S2C_Frames",
    C2S_Frames = "C2S_Frames",
    S2C_PlayerJoin = "S2C_PlayerJoin",
    S2C_PlayerLeave = "S2C_PlayerLeave",
    S2C_HeartBeat = "S2C_HeartBeat",
    C2S_HeartBeat = "C2S_HeartBeat"
}