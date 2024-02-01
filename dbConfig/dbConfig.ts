
import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log("MongoDB connected Succesfully")
    });

    connection.on("error", (err) => {
      console.log("MongoDB cannot connect to the database please check out your connection", + err);
      process.exit();
    })
  } catch (error) {
    console.log("Error occur while connecting with the MongoDB");
    console.log(error);
    
  }
}