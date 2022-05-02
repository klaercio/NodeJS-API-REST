import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()  => {
    console.log('conexão com o banco com feita com sucesso');
})

const app = express();
routes(app);
app.use(express.json());

export default app;