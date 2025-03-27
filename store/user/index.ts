import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@/config/axios.config";
import { IProfile } from "@/types/data.models";

type ProfileState = {
  user: IProfile | null;
  isLoading: boolean;
  status: "idle" | "pending" | "success" | "error";
};

const initialState: ProfileState = {
  user: null,
  isLoading: false,
  status: "idle",
};

// Foydalanuvchi profilini olish uchun async thunk
export const fetchProfile = createAsyncThunk<
  IProfile,
  void,
  { rejectValue: string }
>("profile/fetchProfile", async (_, { rejectWithValue }) => {
  try {
    const response = await instance.get<IProfile>("/profile/");
    return response.data;
  } catch {
    return rejectWithValue("Profilni yuklashda xatolik yuz berdi!");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<IProfile>) => {
      state.user = action.payload;
    },
    clearProfile: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true;
      state.status = "pending";
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProfile.rejected, (state) => {
      state.isLoading = false;
      state.status = "error";
    });
  },
});

export const PROFILE_ACTIONS = userSlice.actions;
export default userSlice.reducer;
