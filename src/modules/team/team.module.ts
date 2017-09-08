import {Module} from "@nestjs/common";
import {TeamRepository} from "./team.repository";
import {TeamController} from "./team.controller";

@Module({
    controllers: [
        TeamController
    ],
    components: [
        TeamRepository
    ],
    modules: [],
})
export class TeamModule {}