import * as mongo from "mongodb";
import dotenv from "dotenv";

export default async function db(path: string, collectionName: string): Promise<any>{
    dotenv.config();

    let data: any;

    const client: mongo.MongoClient = new mongo.MongoClient("mongodb://localhost");
    try {
        await client.connect();

        const db: mongo.Db = client.db("shar-pei-db");

        const collection: mongo.Collection = db.collection(collectionName);

        switch(path) {
            case "/retrieve":
                data = await collection.find().toArray();
                console.info(data);
                break;
            default:
                break;
        }
    } catch (error) {
        console.error(error);
    }

    return data;
    
}