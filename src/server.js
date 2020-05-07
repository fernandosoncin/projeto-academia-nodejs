const express = require("express");
const nunjucks = require("nunjucks");
const routes = require("./routes");
const methodOverride = require("method-override");

const server = express();

//Faz puxar o req body de forms POST
server.use(express.urlencoded({ extended: true }));
//Permite utilização de arquivos "estáticos" (pasta public)
server.use(express.static("public"));
//utilizar o methodoverride (verbos put, delete)
server.use(methodOverride("_method"));
//Importa as rotas
server.use(routes);

//Verificar o que faz <-
server.set("view engine", "njk");

nunjucks.configure("src/app/views", {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen(5000, function() {
  console.log("Server is running again");
});
