import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_URL as string);

    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};
