
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
interface IError {
    data: {
        message: string,
        stack: string,
        success: boolean
    },
    status: number
}
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