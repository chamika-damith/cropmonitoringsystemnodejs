import { PrismaClient } from '@prisma/client';
import CropModel from "../model/crop";

const prisma = new PrismaClient();

// Add a new crop
export async function addCrop(c: CropModel) {
    try {
        const newCrop = await prisma.crop.create({
            data: {
                cropCode: c.cropCode,
                cropCommonName: c.cropCommonName,
                cropScientificName: c.cropScientificName,
                cropCategory: c.cropCategory,
                cropField: c.cropField,
                cropSeason: c.cropSeason,
                cropImage: c.cropImage ? c.cropImage.name : null,
            },
        });
        console.log('Crop Added:', newCrop);
        return newCrop;
    } catch (err) {
        console.log('Error adding crop:', err);
    }
}

// Delete a crop by cropCode
export async function deleteCrop(cropCode: string) {
    try {
        await prisma.crop.delete({
            where: { cropCode: cropCode },
        });
        console.log('Crop deleted:', cropCode);
    } catch (err) {
        console.log('Error deleting crop:', err);
    }
}

// Get all crops
export async function getAllCrops() {
    try {
        return await prisma.crop.findMany();
    } catch (err) {
        console.log('Error getting crops from Prisma:', err);
    }
}

// Update a crop by cropCode
export async function updateCrop(cropCode: string, c: CropModel) {
    try {
        const updatedCrop = await prisma.crop.update({
            where: { cropCode: cropCode },
            data: {
                cropCode: c.cropCode,
                cropCommonName: c.cropCommonName,
                cropScientificName: c.cropScientificName,
                cropCategory: c.cropCategory,
                cropField: c.cropField,
                cropSeason: c.cropSeason,
                cropImage: c.cropImage ? c.cropImage.name : null,
            },
        });
        console.log('Crop updated:', updatedCrop);
    } catch (err) {
        console.log('Error updating crop:', err);
    }
}
