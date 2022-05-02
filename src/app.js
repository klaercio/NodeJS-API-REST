import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";


db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", ()  => {
    console.log('conexão com o banco com feita com sucesso');
})

const app = express();

routes(app);

app.use(express.json());

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaLivro(id);  
    livros.splice(index, 1);
    res.send(`livro ${id}, removido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;