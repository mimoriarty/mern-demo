import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
mongoose.set("returnOriginal", false);

const db = mongoose.connection;

db.on("error", error => console.log(error));

db.once("open", () => {
  console.log("Database connection open!!");
});

export default db;