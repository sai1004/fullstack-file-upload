import { FilesDao } from "../dao/FilesDao";
import { Files } from "../entities/Files";
import { v4 as uuidv4 } from "uuid";

export class FilesService {
    private filesDao: FilesDao;

    constructor() {
        this.filesDao = new FilesDao();
    }

    async save(file: Files) {
        try {
            let isValid = await this.validate(file);
            if (isValid) {
                let filesData = await this.filesDao.save(file);
                let returnData = {
                    id: file.id,
                    url: file.url,
                    message: "Saved Successfully!!",
                };
                return returnData;
            } else {
                let returnData = { message: "Please enter valid data" };
                throw returnData;
            }
        } catch (error) {}
    }

    async validate(file: Files) {
        if (!file.id || file.id == "" || file.id == "0") {
            let uid = uuidv4();
            file.id = uid;
        }
        return true;
    }

    async findAll(filter: string) {
        try {
            let data: any = await this.filesDao.findAll(filter);
            return data;
        } catch (error) {
            throw error;
        }
    }
}
