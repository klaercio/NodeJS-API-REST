import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@alura.mwkd7.mongodb.net/alura?");

let db = mongoose.connection;

export default db;