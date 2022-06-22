export const getPathName = (key: string | undefined) => {
  let path = "";
  let title = "";
  if (key === "girl") {
    path = "imagesGirl";
    title = "Комплекты на выписку для девочек";
  }
  if (key === "boy") {
    path = "imagesBoy";
    title = "Комплекты на выписку для мальчиков";
  }
  if (key === "other") {
    path = "imagesOthers";
    title = "Пледы на выписку, наборы в кровать, корзины";
  }
  return { path, title };
};
