import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "./pages/HomePage/redux/reducer.redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { hashnodeApi } from "./utils/API_Handler";

export const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    [hashnodeApi.reducerPath]: hashnodeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hashnodeApi.middleware),
});

setupListeners(store.dispatch);
