import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("biblioteca_juegos", "root", "Ickkck7Lol", {
    host: "localhost",
    dialect: "mysql"
});

export const PORT = 3000;