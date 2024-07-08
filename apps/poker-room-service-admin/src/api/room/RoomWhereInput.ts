import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatListRelationFilter } from "../chat/ChatListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  chats?: ChatListRelationFilter;
};
