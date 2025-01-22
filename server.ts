import express from 'express';
import cors from 'cors';
import {fieldRoute} from "./routes/field-route";

const app=express();

app.use(express.json())
app.use(cors());

app.use('/field',fieldRoute)

app.listen(3000,(err)=>{
    console.log("Server running on port 3000")
})