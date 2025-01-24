import { PrismaClient } from '@prisma/client';
import {VehicleModel} from "../model/vehicle";

const prisma = new PrismaClient();

// Add a new vehicle
export async function addVehicle(v: VehicleModel) {
    try {
        const newVehicle = await prisma.vehicle.create({
            data: {
                vehicleId: v.vehicleId,
                licensePlateNumber: v.licensePlateNumber,
                vehicleCategory: v.vehicleCategory,
                fuelType: v.fuelType,
                status: v.status,
                allocatedStaff: v.allocatedStaff,
                remarks: v.remarks,
            },
        });
        console.log('Vehicle Added:', newVehicle);
        return newVehicle;
    } catch (err) {
        console.log('Error adding vehicle:', err);
        throw err;
    }
}

// Delete a vehicle by vehicleId
export async function deleteVehicle(vehicleId: string) {
    try {
        await prisma.vehicle.delete({
            where: { vehicleId },
        });
        console.log('Vehicle deleted:', vehicleId);
    } catch (err) {
        console.log('Error deleting vehicle:', err);
        throw err;
    }
}

// Get all vehicles
export async function getAllVehicles() {
    try {
        return await prisma.vehicle.findMany();
    } catch (err) {
        console.log('Error getting vehicles from Prisma:', err);
        throw err;
    }
}

// Update a vehicle by vehicleId
export async function updateVehicle(vehicleId: string, v: VehicleModel) {
    try {
        const updatedVehicle = await prisma.vehicle.update({
            where: { vehicleId },
            data: {
                licensePlateNumber: v.licensePlateNumber,
                vehicleCategory: v.vehicleCategory,
                fuelType: v.fuelType,
                status: v.status,
                allocatedStaff: v.allocatedStaff,
                remarks: v.remarks,
            },
        });
        console.log('Vehicle updated:', updatedVehicle);
        return updatedVehicle;
    } catch (err) {
        console.log('Error updating vehicle:', err);
        throw err;
    }
}
