import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SignIn from "./service";

export type TypeInitialStateAuth = {
  isAuthenticated: boolean;
  isLoading?: boolean;
  status: "pending" | "success" | "error";
  access_token: string | null;
};
const isClient = typeof window !== "undefined";
export const initialState: TypeInitialStateAuth = {
  isAuthenticated: isClient ? !!localStorage.getItem("access_token") : false,
  isLoading: false,
  status: "success",
  access_token: isClient ? localStorage.getItem("access_token") : null,
};

const SignInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.isAuthenticated = false;
      state.status = "success";
      localStorage.removeItem("access_token");
      localStorage.removeItem("refrsh_token");
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SignIn.pending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(
      SignIn.fulfilled,
      (state, action: PayloadAction<{ access: string }>) => {
        state.isAuthenticated = true;
        state.access_token = action.payload?.access || null;
      }
    );
    builder.addCase(SignIn.rejected, (state) => {
      state.isLoading = false;
      state.status = "error";
    });
  },
});

export const AUTH_ACTIONS = SignInSlice.actions;

export default SignInSlice.reducer;
