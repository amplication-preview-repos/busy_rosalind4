import { Lobby as TLobby } from "../api/lobby/Lobby";

export const LOBBY_TITLE_FIELD = "name";

export const LobbyTitle = (record: TLobby): string => {
  return record.name?.toString() || String(record.id);
};
