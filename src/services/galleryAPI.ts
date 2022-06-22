import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ImagesTypes } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const galleryAPI = createApi({
  reducerPath: "galleryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62b307d420cad3685c99a01c.mockapi.io/diorakids/",
  }),
  tagTypes: ["ImagesBoy"],
  endpoints: (build) => ({
    getSliderImg: build.query({
      query: () => ({
        url: "slider",
      }),
    }),
  }),
});

export const { useGetSliderImgQuery } = galleryAPI;

export const getImages = createAsyncThunk(
  "gallery/getImages",
  async (key: string | undefined) => {
    const resp = await axios.get<ImagesTypes[]>(
      `https://62b307d420cad3685c99a01c.mockapi.io/diorakids/${key}`
    );
    return resp.data;
  }
);
