import express from "express";
import cors from "cors";
import db from "./db";

const api = express();
const port = process.env.API_PORT;



api.get("/retrieve", async (req, res) => {
    const items = await db("/retrieve", "shar-peis");
    
    res.send(items);
    res.sendStatus(200);
});

api.listen(port, () => {
    console.info("Listening on port " + port);
});