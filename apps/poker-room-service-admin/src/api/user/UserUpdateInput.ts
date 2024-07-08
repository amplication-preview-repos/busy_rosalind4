import { InputJsonValue } from "../../types";
import { ChatUpdateManyWithoutUsersInput } from "./ChatUpdateManyWithoutUsersInput";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  chats?: ChatUpdateManyWithoutUsersInput;
  payments?: PaymentUpdateManyWithoutUsersInput;
};
