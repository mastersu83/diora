export const getPathName = (key: string | undefined) => {
  if (key === "girl") {
    return "imagesGirl";
  }
  if (key === "boy") {
    return "imagesBoy";
  }
  if (key === "other") {
    return "imagesOthers";
  }
};
