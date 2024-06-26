import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const argentBankApi = createApi({
    reducerPath: 'argentBankApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1/user/',
        timeout: 5000,
        prepareHeaders: (headers, { getState }) => {
            // récupération du token du state pour les endpoints profile et edit
            const token = (getState()).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    tagTypes: ['auth', 'user'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userLog) => ({
                url: `login`,
                method: 'POST',
                body: userLog
            }),
        }),
        profile: builder.mutation({
            query: () => ({
                url: `profile`,
                method: 'POST',
                body: {}
            }) 
        }),
        editUsername: builder.mutation({
            query: (userName) => ({
                url: `profile`,
                method: 'PUT',
                body: userName,
                timeout: 5000,
            }) 
        }),
        // anticipation pour la création de compte
        // signup: builder.mutation({
        //     query: ({email, password, firstName, lastName, userName}) => ({
        //         url: `signup`,
        //         method: 'POST',
        //         body: {
        //             email,
        //             password,
        //             firstName,
        //             lastName,
        //             userName
        //         }
        //     }) 
        // }),
    }),
})

export const {useLoginMutation, useProfileMutation, useEditUsernameMutation} =argentBankApi

