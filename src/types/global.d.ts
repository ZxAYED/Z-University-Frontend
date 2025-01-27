
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
interface IError {
    data: {
        message: string,
        stack: string,
        success: boolean
    },
    status: number
}
export interface IStudent {
    _id: string,
    id: number,
    fullName: string,
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    academicSemester: string;
    academicDepartment: string;
    gender: string;
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup: string;
    presentAddress: string;
    permanentAddress: string;
    guardian: {
        fatherName: string;
        fatherOccupation: string;
        fatherContactNo: string;
        motherName: string;
        motherOccupation: string;
        motherContactNo: string;
    };
    localGuardian: {
        name: string;
        occupation: string;
        contactNo: string;
        address: string;
    };
    profileImg: string;
};
export interface filterParams { name: string; value: string; }
export interface IAcademicSemester {
    _id: string,
    name: string,
    year: string
    startMonth: string
    endMonth: string
    createdAt: string
    updatedAt: string
}
export interface IMeta {
    limit: number,
    page: number,
    total: number,
    totalPage: number
}
export interface IResponse<T> {
    data?: T,
    error?: IError,
    meta?: IMeta,
    success?: boolean,
    message?: string
}
export type TResponseRedux<T> = IResponse<T> & BaseQueryApi