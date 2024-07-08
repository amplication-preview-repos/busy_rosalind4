import { ChatUpdateManyWithoutRoomsInput } from "./ChatUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  chats?: ChatUpdateManyWithoutRoomsInput;
};
