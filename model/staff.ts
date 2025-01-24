import FieldModel from "./field";

export class StaffModel {
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinedDate: string;
    dob: string;
    address: string;
    contactNo: string;
    email: string;
    role: string;
    field: FieldModel[];
    vehicle: string[];

    constructor(
        staffId: string,
        firstName: string,
        lastName: string,
        designation: string,
        gender: string,
        joinedDate: string,
        dob: string,
        address: string,
        contactNo: string,
        email: string,
        role: string,
        field: FieldModel[],
        vehicle: string[]
    ) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.address = address;
        this.contactNo = contactNo;
        this.email = email;
        this.role = role;
        this.field = field;
        this.vehicle = vehicle;
    }
}
