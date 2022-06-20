import { configureStore } from "@reduxjs/toolkit";
import gallerySlice from "./reducers/gallerySlice";
import { galleryAPI } from "../services/galleryAPI";

export const store = configureStore({
  reducer: {
    gallery: gallerySlice.reducer,
    [galleryAPI.reducerPath]: galleryAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(galleryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
