import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LobbyModuleBase } from "./base/lobby.module.base";
import { LobbyService } from "./lobby.service";
import { LobbyController } from "./lobby.controller";
import { LobbyResolver } from "./lobby.resolver";

@Module({
  imports: [LobbyModuleBase, forwardRef(() => AuthModule)],
  controllers: [LobbyController],
  providers: [LobbyService, LobbyResolver],
  exports: [LobbyService],
})
export class LobbyModule {}
