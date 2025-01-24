import express, {Router} from 'express';
import CropModel from "../model/crop";
import {addCrop, deleteCrop, getAllCrops, updateCrop} from "../database/crop-prisma-data-store";

const router = express.Router();

// add a new crop
router.post('/add', async (req, res) => {
    const {
        cropCode,
        cropCommonName,
        cropScientificName,
        cropCategory,
        cropField,
        cropSeason,
        cropImage
    } = req.body;

    const newCrop = new CropModel(
        cropCode,
        cropCommonName,
        cropScientificName,
        cropCategory,
        cropField,
        cropSeason,
        cropImage
    );

    try {
        const crop = await addCrop(newCrop);
        res.status(201).json(crop);
    } catch (err) {
        res.status(500).json({error: 'Error adding crop'});
    }
});

//get all crops
router.get('/get', async (req, res) => {
    try {
        const crops = await getAllCrops();
        res.status(200).json(crops);
    } catch (err) {
        res.status(500).json({error: 'Error fetching crops'});
    }
});

// delete a crop by cropCode
router.delete('/delete/:cropCode', async (req, res) => {
    const {cropCode} = req.params;

    try {
        await deleteCrop(cropCode);
        res.status(200).json({message: `Crop ${cropCode} deleted successfully`});
    } catch (err) {
        res.status(500).json({error: 'Error deleting crop'});
    }
});

//update a crop
router.put('/update', async (req, res) => {
    const {cropCode} = req.body;
    const {
        cropCommonName,
        cropScientificName,
        cropCategory,
        cropField,
        cropSeason,
        cropImage
    } = req.body;

    const updatedCrop = new CropModel(
        cropCode,
        cropCommonName,
        cropScientificName,
        cropCategory,
        cropField,
        cropSeason,
        cropImage
    );

    try {
        await updateCrop(cropCode, updatedCrop);
        res.status(200).json({message: `Crop ${cropCode} updated successfully`});
    } catch (err) {
        res.status(500).json({error: 'Error updating crop'});
    }
});

export const cropRoute = router;
