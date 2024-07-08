import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ChatWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  room?: RoomWhereUniqueInput;
};
