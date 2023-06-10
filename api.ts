import express from "express";
import cors from "cors";
import db from "./db";

const api = express();
const port = process.env.API_PORT || 3001;

api.use(cors({
    methods: ["GET", "POST"],
    origin: "*"
}));

api.get("/retrieve", async (req, res) => {
    const items = await db("/retrieve", "sharpeis");
    
    res.send({items});
});

api.listen(port, () => {
    console.info("Listening on port " + port);
});