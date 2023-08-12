import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config"

const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("MONGODB_URI environment variable must be defined");
}
const client = new MongoClient(uri);

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log("Connected successfully to server");
    } catch (err) {
        console.log(err);
    }
};

const getPost = async () => {
    try {
        await connectToDatabase();
        const db = client.db("blog");
        const collection = db.collection("posts");
        const result = await collection.findOne({});
        if (result) console.log(result.title);
        else console.log("No document matches the provided query.");
    } catch (err) {
        console.log(err);
    }
}

getPost();