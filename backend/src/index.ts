import * as dotenv from "dotenv";
import createServer from "./utils/server";
import connect from "./utils/connect";

dotenv.config({ path: __dirname + "/.env" });

const port = 3000;
const app = createServer();
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, async () => {
  console.log(`App is running at http://localhost:3000`);

  // await connect();
});

export default app;