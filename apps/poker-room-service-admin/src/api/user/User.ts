import { JsonValue } from "type-fest";
import { Chat } from "../chat/Chat";
import { Payment } from "../payment/Payment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  chats?: Array<Chat>;
  payments?: Array<Payment>;
};
