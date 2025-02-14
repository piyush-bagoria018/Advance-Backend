import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectiomInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connected !! DB HOST:${connectiomInstance.connection.host}`
    );
  } catch (error) {
    console.error("ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
