import express from "express";
import users from "./mocks/users";
import userRoutes from "./routes/users";
import coursesRoutes from "./routes/courses";
import bodyParser from "body-parser";
import db from "./db/db";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

userRoutes(app);
coursesRoutes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})