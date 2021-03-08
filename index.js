const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("src/db.json");
const middlewares = jsonServer.defaults();

const PORT = 8080;

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
server.options("*", cors());
server.use(middlewares);
server.use("/qrp/api/v2", router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
