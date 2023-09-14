import mongoose from "mongoose";
import { users, courses } from "./data";
import { UserModel } from "../models/User";
import { CourseModel } from "../models/Course";

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", error => console.log(error));

db.once("open", () => {
  console.log("Database connection open!!");
  UserModel.insertMany(users);
  CourseModel.insertMany(courses);
});