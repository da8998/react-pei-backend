import * as mongo from "mongodb";
import dotenv from "dotenv";

export default async function db(path: string, collectionName: string): Promise<any>{
    dotenv.config();

    const client: mongo.MongoClient = new mongo.MongoClient(process.env.MONGO_DB_URI as string);
    try {
        await client.connect();

        const db: mongo.Db = client.db(process.env.DB_NAME as string);

        const collection: mongo.Collection = db.collection(collectionName);

        switch(path) {
            case "/retrieve":
                const data = collection.find({});
                return data;
            default:
                break;
        }
    } catch (error) {
        console.error(error);
    }
    
}