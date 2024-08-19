import { apiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    confirmUser: builder.query({
      query: (token) => `/auth/confirmar/${token}`,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut());
          dispatch(apiSlice.util.resetApiState());
        } catch (error) {
          console.log(error);
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { accessToken } = data;
          dispatch(setCredentials({ accessToken }));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    passwordRecovery: builder.mutation({
      query: (email) => ({
        url: "/auth/recuperacion-de-contrasena",
        method: "POST",
        body: { email },
      }),
    }),
    establishNewPassword: builder.mutation({
      query: ({ password, token }) => ({
        url: `/auth/reestablecer-contrasena/${token}`,
        method: "POST",
        body: { password },
      }),
    }),
  }),
});

export const {
  useConfirmUserQuery,
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation,
  usePasswordRecoveryMutation,
  useEstablishNewPasswordMutation,
} = authApiSlice;
