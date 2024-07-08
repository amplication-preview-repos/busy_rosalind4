import { ChatCreateNestedManyWithoutRoomsInput } from "./ChatCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  chats?: ChatCreateNestedManyWithoutRoomsInput;
};
