import express from 'express';
import cors from 'cors';
import {fieldRoute} from "./routes/field-route";
import { PrismaClient } from '@prisma/client';

const app=express();
const prisma = new PrismaClient();

app.use(express.json())
app.use(cors());

app.use('/field',fieldRoute)

async function connectDatabase() {
    try {
        await prisma.$connect();
        console.log('Connected to Database');
    } catch (error) {
        console.error('Error connecting to database', error);
    }
}

connectDatabase();


app.listen(3000,(err)=>{
    console.log("Server running on port 3000")
})