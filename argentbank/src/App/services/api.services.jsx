import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// pour palier à l'utilisation daxios
export const argentBankApi = createApi({
    reducerPath: 'argentBankApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1/user/',
        prepareHeaders: (headers, { getState }) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const token = (getState()).auth.token
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({email, password}) => ({
                url: `login`,
                method: 'POST',
                body: {email, password}
            }) 
        }),
        // anticipation pour la création de compte
        signup: builder.mutation({
            query: ({email, password, firstName, lastName, userName}) => ({
                url: `signup`,
                method: 'POST',
                body: {
                    email,
                    password,
                    firstName,
                    lastName,
                    userName
                }
            }) 
        }),
        // profile: builder.query({
        //     query: ({id, email, password, firstName, lastName, userName}) => ({
        //         url: `profile/${id}`,
        //         method: 'POST',
        //         body: {
        //             id,
        //             email,
        //             password,
        //             firstName,
        //             lastName,
        //             userName
        //         }
        //     }) 
        // }),
        editUsername: builder.mutation({
            query: (userName, {id}) => ({
                url: `profile/${id}`,
                method: 'PUT',
                body: { userName }
            }) 
        }),
    }),
})

export const { useLoginMutation, useSignupMutation, useProfileMutation, useEditUsernameMutation } = argentBankApi

