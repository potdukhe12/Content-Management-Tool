import mysql from "mysql";

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "Abhi@1234",
    database:"blog"
  });