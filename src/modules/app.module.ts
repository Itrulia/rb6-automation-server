import {Module} from "@nestjs/common";
import {TournamentModule} from "./tournament/tournament.module";

@Module({
    modules: [
        TournamentModule,
    ]
})
export class ApplicationModule {}