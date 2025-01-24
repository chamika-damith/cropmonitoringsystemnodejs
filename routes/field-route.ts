import express, { Router } from 'express';
import FieldModel from "../model/field";
import {addField, deleteField, getAllFields, updateField} from "../database/field-prisma-data-store";

const router = express.Router();

// Route to add a new field
router.post('/add', async (req, res) => {
    const { fieldCode, fieldName, fieldLocation, fieldSize, img_1, img_2 } = req.body;

    const newField = new FieldModel(fieldCode, fieldName, fieldLocation, fieldSize, img_1, img_2);

    try {
        const field = await addField(newField);
        res.status(201).json(field);
    } catch (err) {
        res.status(500).json({ error: 'Error adding field' });
    }
});

// Route to get all fields
router.get('/get', async (req, res) => {
    try {
        const fields = await getAllFields();
        res.status(200).json(fields);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching fields' });
    }
});

// Route to delete a field by fieldCode
router.delete('/delete/:fieldCode', async (req, res) => {
    const { fieldCode } = req.params;

    try {
        await deleteField(fieldCode);
        res.status(200).json({ message: `Field ${fieldCode} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting field' });
    }
});

// Route to update a field
router.put('/update', async (req, res) => {
    const { fieldCode } = req.body;
    const { fieldName, fieldLocation, fieldSize, img_1, img_2 } = req.body;

    const updatedField = new FieldModel(fieldCode, fieldName, fieldLocation, fieldSize, img_1, img_2);

    try {
        await updateField(fieldCode, updatedField);
        res.status(200).json({ message: `Field ${fieldCode} updated successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error updating field' });
    }
});

export const fieldRoute = router;
