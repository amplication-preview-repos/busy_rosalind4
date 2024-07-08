import { User } from "../user/User";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  transactionId: string | null;
  user?: User | null;
};
