import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createAccount: {
      prepare(fullName, nationalID, createdAt) {
        return {
          payload: { fullName, nationalID, createdAt },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName: (state, action) => {
      state.fullName = action.payload;
    },
  },
});

export default customerSlice.reducer;
export const { createAccount, updateName } = customerSlice.actions;
