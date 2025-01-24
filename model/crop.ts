export default class CropModel {
    cropCode: string;
    cropCommonName: string;
    cropScientificName: string;
    cropCategory: string;
    cropField: string;
    cropSeason: string;
    cropImage: File | null;

    constructor(
        cropCode: string,
        cropCommonName: string,
        cropScientificName: string,
        cropCategory: string,
        cropField: string,
        cropSeason: string,
        cropImage: File | null
    ) {
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropCategory = cropCategory;
        this.cropField = cropField;
        this.cropSeason = cropSeason;
        this.cropImage = cropImage;
    }
}
