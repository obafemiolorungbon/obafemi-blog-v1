import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  user: {},
  loading: false,
};

export const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPosts } = homepageSlice.actions;

export default homepageSlice.reducer;
