import "reflect-metadata";

export let dbConfig: any = {
    name: "default",
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "secret",
    database: "files_db",
    logging: true,
    synchronize: false,
    entities: [__dirname + "/../entities/**/*{.ts,.js}"],
};
