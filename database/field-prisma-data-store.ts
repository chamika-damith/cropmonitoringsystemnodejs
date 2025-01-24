import { PrismaClient } from '@prisma/client';
import FieldModel from "../model/field";

const prisma = new PrismaClient();

// Add a new field
export async function addField(f: FieldModel) {
    try {
        const newField = await prisma.field.create({
            data: {
                fieldCode: f.fieldCode,
                fieldName: f.fieldName,
                fieldLocation: f.fieldLocation,
                fieldSize: f.fieldSize,
                img_1: f.img_1 ? f.img_1.name : null,
                img_2: f.img_2 ? f.img_2.name : null,
            },
        });
        console.log('Field Added:', newField);
        return newField;
    } catch (err) {
        console.log('Error adding field:', err);
    }
}

// Delete a field by fieldCode
export async function deleteField(fieldCode: string) {
    try {
        await prisma.field.delete({
            where: { fieldCode: fieldCode },
        });
        console.log('Field deleted:', fieldCode);
    } catch (err) {
        console.log('Error deleting field:', err);
    }
}

// Get all fields
export async function getAllFields() {
    try {
        return await prisma.field.findMany();
    } catch (err) {
        console.log('Error getting fields from Prisma:', err);
    }
}

// Update a field by fieldCode
export async function updateField(fieldCode: string, f: FieldModel) {
    try {
        const updatedField = await prisma.field.update({
            where: { fieldCode: fieldCode },
            data: {
                fieldCode: f.fieldCode,
                fieldName: f.fieldName,
                fieldLocation: f.fieldLocation,
                fieldSize: f.fieldSize,
                img_1: f.img_1 ? f.img_1.name : null,
                img_2: f.img_2 ? f.img_2.name : null,
            },
        });
        console.log('Field updated:', updatedField);
    } catch (err) {
        console.log('Error updating field:', err);
    }
}
