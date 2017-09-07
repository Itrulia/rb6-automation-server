import {Component} from "@nestjs/common";
import * as request from "request-promise-native";

@Component()
export class TournamentRepository {

    /**
     * @param tournamentId
     */
    public async getTournament(tournamentId: number): Promise<any> {
        const url = `https://api.eslgaming.com/play/v1/leagues/${tournamentId}`;
        const data = await request({url: url, json: true});

        return data;
    }

    /**
     * @param tournamentId
     */
    public async getRanking(tournamentId: number): Promise<any[]> {
        const url = `https://api.eslgaming.com/play/v1/leagues/${tournamentId}/ranking`;
        const data = await request({url: url, json: true});

        return data.ranking;
    }

    /**
     * @param tournamentId
     */
    public async getPodium(tournamentId: number): Promise<any[]> {
        const data = await this.getRanking(tournamentId);

        return data.slice(0, 3).map(contestant => contestant.team ? contestant.team : contestant.user);
    }
}