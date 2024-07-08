import { User } from "../user/User";
import { Room } from "../room/Room";

export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  user?: User | null;
  room?: Room | null;
};
