import mongoose from "mongoose";

async function connection() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_KEY}:${process.env.DATABASE_PASSWORD}@ferro-cluster.epmfm1r.mongodb.net/?retryWrites=true&w=majority`
  );
}
console.log("MongoDB connection is successful");

export default connection;
