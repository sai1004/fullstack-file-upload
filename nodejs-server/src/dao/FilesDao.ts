import { getRepository, Repository } from "typeorm";
import { Files } from "../entities/Files";

export class FilesDao {
    /* get the access to files table */

    private dao: Repository<Files>;

    constructor() {
        this.dao = getRepository(Files);
    }

    async save(data: Files) {
        return await this.dao.save(data);
    }

    async findAll(data: any) {
        return await this.dao.find(data);
    }

    async findOne(data: any) {
        return await this.dao.findOne(data);
    }

    async findById(id: string) {
        return await this.dao.findOne(id);
    }

    async delete(data: Files) {
        return await this.dao.remove(data);
    }
}
