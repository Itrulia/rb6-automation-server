import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {TournamentRepository} from "./tournament.repository";

@Controller()
export class TournamentController {
    constructor(private tournament: TournamentRepository) {}

    @Get("tournament/:tournamentId/podium")
    public async findPodium(
        @Response() res: Res,
        @Param("tournamentId") tournamentId: number
    ) {
        const data = await this.tournament.getPodium(tournamentId);
        res.status(HttpStatus.OK).json(data);
    }
}