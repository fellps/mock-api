const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

const PORT = 8088

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
server.options('*', cors());

server.use(middlewares);
server.use('/qrp/api/v2', router)
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});