import {NestFactory} from "@nestjs/core";
import {ApplicationModule} from "./modules/app.module";
import * as express from "express";

const port = (+process.env.PORT || 8080);
const exp = express();

exp.get("/*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin" , "*");
    next();
});

const app = NestFactory.create(ApplicationModule, exp);
app.listen(port , () => {
    console.log(`Application is listening on port ${port}.`)
});