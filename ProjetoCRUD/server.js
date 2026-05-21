const express = require('express')
const app = express()
const port = 3000

//disponibilizar os arquivos estáticos:

const path = require("path");
app.use(express.static(path.join(__dirname, "puclic")));

//Conexão com Banco de Dados:
const db = require("./db");

//Rota Principal:
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})