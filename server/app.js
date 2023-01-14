import express from "express";
import connection from "./db/connection.js";
import cors from "cors";
import bodyParser from "body-parser";
import purchaseorders from "./models/purchaseorders.js";
import router from "./routes/router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(router);
app.use(express.urlencoded());

await connection();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
