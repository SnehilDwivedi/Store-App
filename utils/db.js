import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function connectToDB() {
  if (!uri) throw new Error("MONGODB_URI is not defined in .env file");

  try {
    await client.connect();
    console.log("✅ MongoDB Connected!");
    return client.db("StoresRatingApp"); // Change DB name if needed
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
}
