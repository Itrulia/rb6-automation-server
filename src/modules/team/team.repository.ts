import {Component} from "@nestjs/common";
import * as request from "request-promise-native";

@Component()
export class TeamRepository {

    /**
     * @param tournamentId
     */
    public async getTeams(teamIds: number[] | string[]): Promise<any[]> {
        const url = `https://api.eslgaming.com/play/v1/teams?ids=${teamIds.join(',')}`;
        const data = await request({url: url, json: true});

        return data;
    }
}