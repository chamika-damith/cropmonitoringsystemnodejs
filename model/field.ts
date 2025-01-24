export default class FieldModel {
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    fieldSize: string;
    img_1: File | null;
    img_2: File | null;

    constructor(
        fieldCode: string,
        fieldName: string,
        fieldLocation: string,
        fieldSize: string,
        img_1: File | null,
        img_2: File | null
    ) {
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.fieldSize = fieldSize;
        this.img_1 = img_1;
        this.img_2 = img_2;
    }
}
