import { PrismaClient } from '@prisma/client';
import { StaffModel } from '../model/staff';

const prisma = new PrismaClient();

// Add a new staff member
export async function addStaff(s: StaffModel) {
    try {
        const newStaff = await prisma.staff.create({
            data: {
                staffId: s.staffId,
                firstName: s.firstName,
                lastName: s.lastName,
                designation: s.designation,
                gender: s.gender,
                joinedDate: s.joinedDate,
                dob:s.dob,
                address: s.address,
                contactNo: s.contactNo,
                email: s.email,
                role: s.role,
                fields: s.field,
                vehicle: s.vehicle
            }
        });
        console.log('Staff Added:', newStaff);
        return newStaff;
    } catch (err) {
        console.error('Error adding staff:', err);
        throw err;
    }
}

// Get all staff members
export async function getAllStaff() {
    try {
        return await prisma.staff.findMany();
    } catch (err) {
        console.error('Error fetching staff:', err);
        throw err;
    }
}


// Update a staff member by staffId
export async function updateStaff(staffId: string, s: StaffModel) {
    try {
        const updatedStaff = await prisma.staff.update({
            where: {staffId: staffId },
            data: {
                firstName: s.firstName,
                lastName: s.lastName,
                designation: s.designation,
                gender: s.gender,
                joinedDate: s.joinedDate,
                dob: s.dob,
                address: s.address,
                contactNo: s.contactNo,
                email: s.email,
                role: s.role,
                fields: s.field,
                vehicle: s.vehicle
            }
        });
        console.log('Staff Updated:', updatedStaff);
        return updatedStaff;
    } catch (err) {
        console.error('Error updating staff:', err);
        throw err;
    }
}

// Delete a staff member by staffId
export async function deleteStaff(staffId: string) {
    try {
        await prisma.staff.delete({
            where: {staffId: staffId }
        });

        console.log('Staff Deleted:', staffId);
    } catch (err) {
        console.error('Error deleting staff:', err);
        throw err;
    }
}
