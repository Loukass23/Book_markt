import * as dotenv from "dotenv";
import createServer from "./utils/server";
import connect from "./utils/connect";

dotenv.config({ path: __dirname + "/.env" });

const port = process.env.PORT;
const app = createServer();

app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);

  await connect();
});

export default app;