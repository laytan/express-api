import { Sequelize } from "sequelize-typescript";

/**
 *  returns a new connection to the database
 */
export default function(): any {
    return new Sequelize({
                database: process.env.DATABASE_NAME,
                dialect: "mysql",
                host: process.env.DATABASE_HOST,
                logging: false,
                modelPaths: [__dirname + "/models"],
                password: process.env.DATABASE_PASSWORD,
                username: process.env.DATABASE_USERNAME,
            });
}
