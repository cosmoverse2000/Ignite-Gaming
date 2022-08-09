import axios from "axios";
import { PopularGamesUrl, UpcomingGamesUrl, NewGamesUrl, gameSearchlUrl } from "../Api";




export const loadGames = () =>
    async (dispatch) => {

        const popularGData = await axios.get(PopularGamesUrl());
        const UpcomingGData = await axios.get(UpcomingGamesUrl());
        const NewGData = await axios.get(NewGamesUrl());


        dispatch(
            {
                type: "FETCH_GAMES",
                payload: {
                    popular: popularGData,
                    upcoming: UpcomingGData,
                    newgames: NewGData,
                }
            }
        );



    };

export const fetchGames = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(gameSearchlUrl(game_name));
    dispatch({
        type: "SEARCH",
        payload: {
            search: searchGames.data.results
        },
    });
};