// const { createSelector, createStructuredSelector } = require('reselect');
import { createSelector } from '@reduxjs/toolkit';

const HomePageObject = (state = {}) => state.homepage;

export const selectPosts = createSelector(
  HomePageObject,
  (HomePageObject) => HomePageObject.posts
);

export const selectActivePost = createSelector(
  HomePageObject,
  (HomePageObject) => HomePageObject.activePost
);
