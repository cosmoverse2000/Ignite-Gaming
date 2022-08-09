
const scaleImg = (ImagePath, size) => {
    const image = ImagePath.match(/media\/screenshots/)
        ? ImagePath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
        : ImagePath.replace("media/games", `media/resize/${size}/-/games`);

    return image;
};

export default scaleImg;