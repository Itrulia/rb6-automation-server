import {Controller, Get, Post, HttpStatus, Response, Param} from "@nestjs/common";
import {Request, Response as Res, NextFunction} from 'express';
import {TeamRepository} from "./team.repository";

@Controller()
export class TeamController {
    constructor(private team: TeamRepository) {}

    @Get("team/:teamIds")
    public async findPodium(
        @Response() res: Res,
        @Param("teamIds") teamIds: string
    ) {
        const data = await this.team.getTeams(teamIds.split(","));
        res.status(HttpStatus.OK).json(data);
    }
}