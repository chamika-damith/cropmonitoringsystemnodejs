export class EquipmentModel {
    equipmentId: string;
    equipmentName: string;
    equipmentType: string;
    equipmentStatus: boolean;
    assignedStaff: string;
    assignedField: string;

    constructor(
        equipmentId: string,
        equipmentName: string,
        equipmentType: string,
        equipmentStatus: boolean,
        assignedStaff: string,
        assignedField: string
    ) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.equipmentType = equipmentType;
        this.equipmentStatus = equipmentStatus;
        this.assignedStaff = assignedStaff;
        this.assignedField = assignedField;
    }
}
