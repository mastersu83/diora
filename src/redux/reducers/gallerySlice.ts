import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageTypes } from "../../types/types";
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
    setTitle(state: InitialStateType, action: PayloadAction<string>) {
      state.title = action.payload;
    },
  },
  extraReducers: {
    [getImages.pending.type]: (state: InitialStateType) => {
      state.imagesIsSuccess = false;
    },
    [getImages.fulfilled.type]: (
      state: InitialStateType,
      action: PayloadAction<ImageTypes[]>
    ) => {
      state.vertical = [];
      state.horizontal = [];
      action.payload.map((i) =>
        i.type === 0 ? state.vertical.push(i) : state.horizontal.push(i)
      );
      state.imagesIsSuccess = true;
    },
  },
});

export const { setTitle } = gallerySlice.actions;

export default gallerySlice;
