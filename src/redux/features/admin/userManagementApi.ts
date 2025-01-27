import { IStudent, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";


const userManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addStudent: builder.mutation({
            query: (data) => ({
                url: '/users/create-student',
                method: 'POST',
                body: data
            })
        }),
        getAllStudents: builder.query({
            query: (args) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((i) => {
                        params.append(i.name, i.value)
                    })
                }


                return {
                    url: '/students',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<IStudent[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
    })
})

export const { useAddStudentMutation, useGetAllStudentsQuery } = userManagementApi