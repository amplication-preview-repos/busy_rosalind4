import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  transactionId?: string | null;
  user?: UserWhereUniqueInput | null;
};
