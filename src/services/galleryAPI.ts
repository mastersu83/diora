import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ImagesTypes } from "../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const galleryAPI = createApi({
  reducerPath: "galleryAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["ImagesBoy"],
  endpoints: (build) => ({
    getSliderImg: build.query({
      query: () => ({
        url: "slider",
      }),
    }),
    getOthersImg: build.query({
      query: () => ({
        url: "others",
      }),
    }),
  }),
});

export const { useGetSliderImgQuery, useGetOthersImgQuery } = galleryAPI;

export const getImages = createAsyncThunk(
  "gallery/getImages",
  async (key: string | undefined) => {
    const resp = await axios.get<ImagesTypes[]>(`http://localhost:4000/${key}`);
    return resp.data;
  }
);
