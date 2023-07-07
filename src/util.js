const scaleImg = (ImagePath, size) => {
  if (ImagePath === null) {
    return "https://cdn.pixabay.com/photo/2020/04/22/18/22/excuse-me-5079442_1280.jpg";
  }
  const image = ImagePath.match(/media\/screenshots/)
    ? ImagePath.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : ImagePath.replace("media/games", `media/resize/${size}/-/games`);

  return image;
};

export default scaleImg;
