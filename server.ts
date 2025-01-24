import express from 'express';
import cors from 'cors';
import {fieldRoute} from "./routes/field-route";
import { PrismaClient } from '@prisma/client';
import {cropRoute} from "./routes/crop-route";
import {staffRoute} from "./routes/staff-route";
import {vehicleRoute} from "./routes/vehicle-route";
import {equipmentRoute} from "./routes/equipment-route";

const app=express();
const prisma = new PrismaClient();

app.use(express.json())
app.use(cors());

app.use('/field',fieldRoute)
app.use('/crop',cropRoute)
app.use('/staff',staffRoute)
app.use('/vehicle',vehicleRoute)
app.use('/equipment',equipmentRoute)

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