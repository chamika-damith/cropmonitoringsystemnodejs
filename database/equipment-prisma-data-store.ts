import { PrismaClient } from '@prisma/client';
import { EquipmentModel } from '../model/equipment';

const prisma = new PrismaClient();

// Add new equipment
export async function addEquipment(e: EquipmentModel) {
    try {
        const newEquipment = await prisma.equipment.create({
            data: {
                equipmentId: e.equipmentId,
                equipmentName: e.equipmentName,
                equipmentType: e.equipmentType,
                equipmentStatus: e.equipmentStatus,
                staffId: e.assignedStaff,
                fieldCode: e.assignedField,
            },
        });
        console.log('Equipment Added:', newEquipment);
        return newEquipment;
    } catch (err) {
        console.error('Error adding equipment:', err);
        throw err;
    }
}

// Get all equipment
export async function getAllEquipment() {
    try {
        return await prisma.equipment.findMany({
            include: {
                assignedStaff: true,
                assignedField: true,
            },
        });
    } catch (err) {
        console.error('Error fetching equipment:', err);
        throw err;
    }
}

// Get equipment by ID
export async function getEquipmentById(equipmentId: string) {
    try {
        return await prisma.equipment.findUnique({
            where: { equipmentId },
            include: {
                assignedStaff: true,
                assignedField: true,
            },
        });
    } catch (err) {
        console.error('Error fetching equipment by ID:', err);
        throw err;
    }
}

// Update equipment by ID
export async function updateEquipment(equipmentId: string, e: EquipmentModel) {
    try {
        const updatedEquipment = await prisma.equipment.update({
            where: { equipmentId },
            data: {
                equipmentName: e.equipmentName,
                equipmentType: e.equipmentType,
                equipmentStatus: e.equipmentStatus,
                staffId: e.assignedStaff,
                fieldCode: e.assignedField,
            },
        });
        console.log('Equipment Updated:', updatedEquipment);
        return updatedEquipment;
    } catch (err) {
        console.error('Error updating equipment:', err);
        throw err;
    }
}

// Delete equipment by ID
export async function deleteEquipment(equipmentId: string) {
    try {
        await prisma.equipment.delete({
            where: { equipmentId },
        });
        console.log('Equipment Deleted:', equipmentId);
    } catch (err) {
        console.error('Error deleting equipment:', err);
        throw err;
    }
}
