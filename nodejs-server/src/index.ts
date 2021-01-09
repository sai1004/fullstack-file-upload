const express = require("express");
const app = express();
import { createConnection } from "typeorm";
import * as Config from "./config/config";
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const logger = require("morgan");
dotenv.config();

const port = process.env.PORT;

import { FilesController } from "../src/routes/FilesController";

const filesRoutes = new FilesController();

const initServer = async () => {
    try {
        const conn = await createConnection(Config.dbConfig);
        if (conn.isConnected) {
            /* ''''''' middlewares ''''''''' */
            app.use(express.urlencoded({ extended: false }));
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(logger("common"));

            /* ''''''' App Routes ''''''''' */
            app.get("/api", (req: any, res: any) => {
                res.json({ message: " Hello App Works!! " });
            });

            // app.use("/api/file", filesRoutes.getRouter());

            /* ''''''' Start server ''''''''' */
            app.listen(port, (err: any) => {
                if (err) throw err;
                console.log(`
            ++++++++++++++++++++++++++++++++++++++++++++++++
            server is listening on http://127.0.0.1:${port}/api
            ++++++++++++++++++++++++++++++++++++++++++++++++
            `);
            });
        }
    } catch (error) {
        console.log(`Error While Running Server : `, error.message);
    }
};

initServer();
