import express from 'express';
import { StaffModel } from '../model/staff';
import FieldModel from '../model/field';
import {addStaff, deleteStaff, getAllStaff, updateStaff} from "../database/staff-prisma-data-store";

const router = express.Router();

// Route to add a new staff member
router.post('/add', async (req, res) => {
    const {
        staffId,
        firstName,
        lastName,
        designation,
        gender,
        joinedDate,
        dob,
        address,
        contactNo,
        email,
        role,
        field,
        vehicle,
    } = req.body;

    const fields = field.map(
        (f: any) => new FieldModel(f.fieldCode, f.fieldName, f.fieldLocation, f.fieldSize, f.img_1, f.img_2)
    );

    const newStaff = new StaffModel(
        staffId,
        firstName,
        lastName,
        designation,
        gender,
        joinedDate,
        dob,
        address,
        contactNo,
        email,
        role,
        fields,
        vehicle
    );

    try {
        const staff = await addStaff(newStaff);
        res.status(201).json(staff);
    } catch (err) {
        res.status(500).json({ error: 'Error adding staff member' });
    }
});

// Route to get all staff members
router.get('/get', async (req, res) => {
    try {
        const staffList = await getAllStaff();
        res.status(200).json(staffList);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching staff members' });
    }
});

// Route to update a staff member
router.put('/update', async (req, res) => {
    const {
        staffId,
        firstName,
        lastName,
        designation,
        gender,
        joinedDate,
        dob,
        address,
        contactNo,
        email,
        role,
        field,
        vehicle,
    } = req.body;

    const fields = field.map(
        (f: any) => new FieldModel(f.fieldCode, f.fieldName, f.fieldLocation, f.fieldSize, f.img_1, f.img_2)
    );

    const updatedStaff = new StaffModel(
        staffId,
        firstName,
        lastName,
        designation,
        gender,
        joinedDate,
        dob,
        address,
        contactNo,
        email,
        role,
        fields,
        vehicle
    );

    try {
        const staff = await updateStaff(staffId, updatedStaff);
        res.status(200).json({ message: `Staff member ${staffId} updated successfully`, staff });
    } catch (err) {
        res.status(500).json({ error: 'Error updating staff member' });
    }
});

// Route to delete a staff member by staffId
router.delete('/delete/:staffId', async (req, res) => {
    const { staffId } = req.params;

    try {
        await deleteStaff(staffId);
        res.status(200).json({ message: `Staff member ${staffId} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting staff member' });
    }
});

export const staffRoute = router;
