import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImagesTypes, ImageTypes } from "../../types/types";
import { getImages } from "../../services/galleryAPI";

type InitialStateType = {
  vertical: ImageTypes[];
  horizontal: ImageTypes[];
  imagesIsSuccess: boolean;
  title: string;
};

const initialState: InitialStateType = {
  vertical: [],
  horizontal: [],
  imagesIsSuccess: false,
  title: "",
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    // addImages(state: InitialStateType, action: PayloadAction<ImagesTypes>) {
    //   state.images.push(action.payload);
    // },
  },
  extraReducers: {
    [getImages.pending.type]: (state: InitialStateType) => {
      state.imagesIsSuccess = false;
    },
    [getImages.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ImagesTypes>
    ) => {
      state.vertical = action.payload.vertical;
      state.horizontal = action.payload.horizontal;
      state.title = action.payload.title;
      state.imagesIsSuccess = true;
    },
  },
});

export default gallerySlice;
