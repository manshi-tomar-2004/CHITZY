import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectionDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected:", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error:", error.message);
    process.exit(1); // stop the app if DB fails
  }
};