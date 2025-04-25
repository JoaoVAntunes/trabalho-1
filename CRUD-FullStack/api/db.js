import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vV9C3y9hjS0si2E",
    database: "XP3"
})