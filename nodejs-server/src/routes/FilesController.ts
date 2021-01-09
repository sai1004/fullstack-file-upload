import { Router } from "express";
import { Files } from "../entities/Files";
import { FilesService } from "../services/FilesService";

export class FilesController {
    private router: Router = Router();
    private service = new FilesService();

    getRouter(): Router {
        this.router.get("/files", async (request: any, response: any) => {
            try {
                let reqData: any;

                reqData = request.query ? request.query : {};
                let result: Files = null;

                result = await this.service.findAll(reqData);
                response.send({ status: 1, data: result });
            } catch (error) {
                throw error;
            }
        });

        this.router.post("/upload", async (request: any, response: any) => {
            try {
                let reqData: any = {};
                let sampleFile;
                let uploadPath: any;

                console.log("------------fileupload start------------------");

                if (!request.files || Object.keys(request.files).length === 0) {
                    response.status(400).send("NO Files were uploaded.");
                    return;
                }

                sampleFile = await request.files.sampleFile;

                uploadPath = __dirname + "/uploads/" + sampleFile.name;

                let result = null;

                // result = await this.service.save(reqData);

                response.send({ status: 1, data: result });
            } catch (error) {
                console.log(error);
                response.send({ status: 0, error: error });
            }
        });

        return this.router;
    }
}
