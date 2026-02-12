import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define mongodb uri in env variables");
}

const connection: { isConnected?: number } = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    console.log("Database already connected");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI || "");

    // console.log("murgi chor 101");
    // console.log(db.connections[0].readyState);
    // console.log(db.connections);
    // console.log("murgi chor 303");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error("failed connecting to the database ", error);
    process.exit(1);
  }
};
