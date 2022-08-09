import axios from "axios";
import { gameDetailUrl, gameScreenlUrl } from "../Api";


export const loadDetails = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING",
    })
    const gameDetailData = await axios.get(gameDetailUrl(id));
    const gameScreenData = await axios.get(gameScreenlUrl(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            gameDetail: gameDetailData.data,
            gameScreen: gameScreenData.data
        },

    });

};
