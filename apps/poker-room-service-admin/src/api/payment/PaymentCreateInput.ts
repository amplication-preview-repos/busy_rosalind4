import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  transactionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
