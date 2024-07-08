import { LobbyWhereInput } from "./LobbyWhereInput";
import { LobbyOrderByInput } from "./LobbyOrderByInput";

export type LobbyFindManyArgs = {
  where?: LobbyWhereInput;
  orderBy?: Array<LobbyOrderByInput>;
  skip?: number;
  take?: number;
};
