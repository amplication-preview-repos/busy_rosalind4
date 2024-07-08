import { InputJsonValue } from "../../types";
import { ChatCreateNestedManyWithoutUsersInput } from "./ChatCreateNestedManyWithoutUsersInput";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  chats?: ChatCreateNestedManyWithoutUsersInput;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
};
