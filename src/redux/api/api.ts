import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'baseapi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['doto'],//26-4 video Redux Cache Behaviors
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: (priority) => {
                const params = new URLSearchParams()
                if (priority) {
                    params.append('priority', priority)
                }
                return {
                    url: '/tasks',
                    method: "GET",
                    params: params
                }

            },
            providesTags: ['doto'],
        }),
        addTodo: builder.mutation({


            query: (data) => ({
                url: '/task',
                method: "POST",
                body: data

            }),
            invalidatesTags: ['doto']

        }),
        updatetogleTodo: builder.mutation({
      

            query: (info) => ({
                url: `/task/${info.id}`,
                method: "PUT",
                body: info.data

            }),
            invalidatesTags: ['doto']

        })
    })

})



export const { useGetTodoQuery, useAddTodoMutation,useUpdatetogleTodoMutation } = baseApi