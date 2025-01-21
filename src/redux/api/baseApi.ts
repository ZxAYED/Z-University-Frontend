/* eslint-disable prefer-const */
import { BaseQueryApi, BaseQueryFn, createApi, DefinitionType, FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logout, setUser } from "../features/auth/authSlice";
import { toast } from "sonner";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('authorization', token)
        }
    }
})

const baseQueryWithRefreshToken: BaseQueryFn<FetchArgs, BaseQueryApi, DefinitionType> = async (args, api, extraOptions): Promise<any> => {
    let result = baseQuery(args, api, extraOptions)

    if ('error' in result && result.error?.status === 404) {

        toast.error('User not found')
    }


    if ('error' in result && result.error?.status === 401) {
        const res = await fetch('/auth/refresh-token', { credentials: 'include' })
        const data
            = res.json()
        const user = (api.getState() as RootState).auth.user

        api.dispatch(setUser({
            user, token: data?.data?.accessToken as string
        }))
        return result = await baseQuery(args, api, extraOptions)
    }
    else {
        api.dispatch(logout())
    }

    return result

}

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
})