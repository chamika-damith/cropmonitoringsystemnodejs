import express, { Router } from 'express';
import {
    addEquipment,
    getAllEquipment,
    getEquipmentById,
    updateEquipment,
    deleteEquipment,
} from "../database/equipment-prisma-data-store";
import { EquipmentModel } from "../model/equipment";

const router = Router();

// Add a new equipment
router.post('/add', async (req, res) => {
    const {
        equipmentId,
        equipmentName,
        equipmentType,
        equipmentStatus,
        assignedStaff,
        assignedField
    } = req.body;

    const newEquipment = new EquipmentModel(
        equipmentId,
        equipmentName,
        equipmentType,
        equipmentStatus,
        assignedStaff,
        assignedField
    );

    try {
        const equipment = await addEquipment(newEquipment);
        res.status(201).json(equipment);
    } catch (err) {
        res.status(500).json({ error: 'Error adding equipment' });
    }
});

// Get all equipment
router.get('/get', async (req, res) => {
    try {
        const equipmentList = await getAllEquipment();
        res.status(200).json(equipmentList);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching equipment' });
    }
});

// Get equipment by ID
router.get('/get/:equipmentId', async (req, res) => {
    const { equipmentId } = req.params;

    try {
        const equipment = await getEquipmentById(equipmentId);
        if (equipment) {
            res.status(200).json(equipment);
        } else {
            res.status(404).json({ error: 'Equipment not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error fetching equipment by ID' });
    }
});

// Update equipment
router.put('/update', async (req, res) => {
    const {
        equipmentId,
        equipmentName,
        equipmentType,
        equipmentStatus,
        assignedStaff,
        assignedField
    } = req.body;

    const updatedEquipment = new EquipmentModel(
        equipmentId,
        equipmentName,
        equipmentType,
        equipmentStatus,
        assignedStaff,
        assignedField
    );

    try {
        await updateEquipment(equipmentId, updatedEquipment);
        res.status(200).json({ message: `Equipment ${equipmentId} updated successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error updating equipment' });
    }
});

// Delete equipment by ID
router.delete('/delete/:equipmentId', async (req, res) => {
    const { equipmentId } = req.params;

    try {
        await deleteEquipment(equipmentId);
        res.status(200).json({ message: `Equipment ${equipmentId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting equipment' });
    }
});

export const equipmentRoute = router;
