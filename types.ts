import * as mongo from "mongodb";

export interface SharPei {
    _id: mongo.ObjectId,
    name: string;
    color: string;
    age: string;
    imageUrl: string;
}