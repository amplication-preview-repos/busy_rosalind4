import { Chat } from "../chat/Chat";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  createdBy: string | null;
  chats?: Array<Chat>;
};
