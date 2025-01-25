import { filterParams, IAcademicSemester, TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";


const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemester: builder.query({
            query: (args) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((i: filterParams) => {
                        params.append(i.name, i.value)
                    })
                }


                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params
                }
            },
            transformResponse: (response: TResponseRedux<IAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta
                }
            }
        }),
        addAcademicSemeser: builder.mutation({
            query: (data) => ({
                url: '/academic-semesters/create-academic-semester',
                method: "POST",
                body: data
            })
        })
    })
})

export const { useGetAllSemesterQuery, useAddAcademicSemeserMutation } = academicSemesterApi