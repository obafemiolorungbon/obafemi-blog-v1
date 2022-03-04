import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  user: {},
  ui: {
    loading: false
  },
  activePost: {}
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      state.posts = action.payload;
      state.ui.loading = false;
    },
    set_active_post: (state, { payload }) => {
      state.activePost = payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { fetchPosts, set_active_post } = homepageSlice.actions;

export default homepageSlice.reducer;
