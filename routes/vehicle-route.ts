import express, { Router } from 'express';
import {
    addVehicle,
    getAllVehicles,
    updateVehicle,
    deleteVehicle,
} from "../database/vehicle-prisma-data-store";
import {VehicleModel} from "../model/vehicle";

const router = Router();

// Add a new vehicle
router.post('/add', async (req, res) => {
    const {
        vehicleId,
        licensePlateNumber,
        vehicleCategory,
        fuelType,
        status,
        allocatedStaff,
        remarks
    } = req.body;

    const newVehicle = new VehicleModel(
        vehicleId,
        licensePlateNumber,
        vehicleCategory,
        fuelType,
        status,
        allocatedStaff,
        remarks
    );

    try {
        const vehicle = await addVehicle(newVehicle);
        res.status(201).json(vehicle);
    } catch (err) {
        res.status(500).json({ error: 'Error adding vehicle' });
    }
});

// Get all vehicles
router.get('/get', async (req, res) => {
    try {
        const vehicles = await getAllVehicles();
        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching vehicles' });
    }
});

// Update a vehicle
router.put('/update', async (req, res) => {
    const {
        vehicleId,
        licensePlateNumber,
        vehicleCategory,
        fuelType,
        status,
        allocatedStaff,
        remarks
    } = req.body;

    const updatedVehicle = new VehicleModel(
        vehicleId,
        licensePlateNumber,
        vehicleCategory,
        fuelType,
        status,
        allocatedStaff,
        remarks
    );

    try {
        await updateVehicle(vehicleId, updatedVehicle);
        res.status(200).json({ message: `Vehicle ${vehicleId} updated successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error updating vehicle' });
    }
});

// Delete a vehicle by vehicleId
router.delete('/delete/:vehicleId', async (req, res) => {
    const { vehicleId } = req.params;

    try {
        await deleteVehicle(vehicleId);
        res.status(200).json({ message: `Vehicle ${vehicleId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting vehicle' });
    }
});

export const vehicleRoute = router;