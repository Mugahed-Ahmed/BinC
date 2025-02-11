import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunk for async actions
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch("/api/user");
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, status: "idle" },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
