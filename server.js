import app from "./src/app.js";

const porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`servidor escutando em http://localhost:${porta}`);
})