import { Router } from "express";
import { Files } from "../entities/Files";
import { FilesService } from "../services/FilesService";
const path = require("path");
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
                let file;
                let uploadPath: any;

                console.log("------------fileupload start------------------");
                console.log("files", request.files);

                if (!request.files || Object.keys(request.files).length === 0) {
                    response.status(400).send("NO Files were uploaded.");
                    return;
                }

                file = await request.files.file;

                uploadPath = path.join(__dirname, "../../assets" + "/uploads/" + file.name);

                console.log("+++++uploadPath++++++", uploadPath);

                /* File Extension check */
                if (!request.files.file.name.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
                    response.status(400).send({ status: 0, error: "Only image files are allowed!" });
                    return;
                }

                let result = null;

                reqData.name = file.name;
                reqData.mimeType = file.mimetype;
                reqData.url = uploadPath;
                result = await this.service.save(reqData);

                file.mv(uploadPath, (err: any) => {
                    if (err) {
                        return response.send({ status: 0, error: "error while saving file!" });
                    }
                });

                response.send({ status: 1, data: result });
            } catch (error) {
                console.log(error);
                response.send({ status: 0, error: error });
            }
        });

        return this.router;
    }
}
