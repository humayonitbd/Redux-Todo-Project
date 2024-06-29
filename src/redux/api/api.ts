import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          // url: `/tasks?priority=${priority}`,
          url: `/tasks`,
          method: "GET",
          // params: { priority },
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        console.log(id, "id");
        return {
          url: `/task/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodoToggle: builder.mutation({
      query: ({ id, data }) => {
        // console.log(`inside base api =>`, data,id)
        return {
          url: `/task/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, data }) => {
        // console.log(`inside base api =>`, data,id)
        return {
          url: `/task/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});


export const { useGetTodosQuery,useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoToggleMutation,useUpdateTodoMutation } = baseApi;