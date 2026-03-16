import mongoose from "mongoose";

let db;

if (process.env.NODE_NODE === "production") {
  mongoose.connect(process.env.MONGODB_URI);
  db = mongoose.connection;
} else {
  // Prevent multiple connections during HMR (Hot Module Replacement)
  if (!global.__db) {
    mongoose.connect(process.env.MONGODB_URI);
    global.__db = mongoose.connection;
  }
  db = global.__db;
}

export { db };
