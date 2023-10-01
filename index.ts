import Myserver from "./classes/server";
import { router } from "./routes/router";
import bodyparser from "body-parser";
import cors from "cors";
const server = new Myserver();

server.app.use(bodyparser.urlencoded({ extended: true }));
server.app.use(bodyparser.json());
server.app.use(cors({ origin: true, credentials: true }));
server.app.use("/", router);

server.start(() => {
  console.log("Server started");
});
