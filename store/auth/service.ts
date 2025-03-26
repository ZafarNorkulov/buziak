import { AxiosRequestConfig, AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import store from "..";
import { AUTH_ACTIONS } from ".";
import instance from "@/config/axios.config";
import Cookies from "js-cookie";

interface SignInData {
  username: string;
  password: string;
}

interface SignInResponse {
  access: string;
  refresh: string;
}

const SignIn = createAsyncThunk<
  SignInResponse,
  { data?: SignInData },
  { rejectValue: string }
>("user/SignIn", async (payload, { rejectWithValue }) => {
  try {
    const isHasToken: string | null = localStorage.getItem("access_token");

    const options: AxiosRequestConfig = {
      url: "/login/",
      method: "POST",
      data: payload?.data ?? null,
    };

    const response = await instance<SignInResponse>(options);
    const _data = response.data;

    if (response.status < 200 || response.status >= 300) {
      console.log("Error: Response status is not 2xx, rejecting!");
      return rejectWithValue("Authorization error!");
    }

    if (!isHasToken) {
      localStorage.setItem("access_token", _data.access);
      Cookies.set("access_token", _data.access, { expires: 7 });
      localStorage.setItem("refresh_token", _data.refresh);
    }

    return _data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    console.error("Error during login:", err);
    return rejectWithValue(err.response?.data?.message || "Unknown error");
  }
});

export default SignIn;

export const _signOut = async (): Promise<void> => {
  store.dispatch(AUTH_ACTIONS.signOut());
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  window.location.pathname = "/auth/signin";
};

export const refreshToken = async (): Promise<void> => {
  try {
    const refresh_token: string | null = localStorage.getItem("refresh_token");

    if (refresh_token) {
      const response = await instance<{ access: string }>({
        url: "/token/refresh",
        method: "POST",
        data: { refresh: refresh_token },
      });
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.access);
        Cookies.set("access_token", response.data.access, { expires: 7 });
        store.dispatch(SignIn({}));
      }
    }
  } catch {
    window.location.href = "/auth/signin";
  }
};

export const logOut = async (): Promise<void> => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
