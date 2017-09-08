import {Module} from "@nestjs/common";
import {TournamentModule} from "./tournament/tournament.module";
import {TeamModule} from "./team/team.module";

@Module({
    modules: [
        TournamentModule,
        TeamModule
    ]
})
export class ApplicationModule {}