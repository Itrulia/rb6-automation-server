import {Module} from "@nestjs/common";
import {TournamentRepository} from "./tournament.repository";
import {TournamentController} from "./tournament.controller";

@Module({
    controllers: [
        TournamentController
    ],
    components: [
        TournamentRepository
    ],
    modules: [],
})
export class TournamentModule {}