import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ChatUpdateInput = {
  message?: string | null;
  user?: UserWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
};
