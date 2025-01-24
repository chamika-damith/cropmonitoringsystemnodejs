export class VehicleModel {
    vehicleId: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: boolean;
    allocatedStaff: string;
    remarks: string;

    constructor(
        vehicleId: string,
        licensePlateNumber: string,
        vehicleCategory: string,
        fuelType: string,
        status: boolean,
        allocatedStaff: string,
        remarks: string
    ) {
        this.vehicleId = vehicleId;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.allocatedStaff = allocatedStaff;
        this.remarks = remarks;
    }
}
