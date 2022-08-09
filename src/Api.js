//Base url

const BASE_Url = "https://api.rawg.io/api/";
const key = process.env.REACT_APP_GAME_KEY;
// get dates 
const today = new Date();
const todayDate = today.toISOString().substring(0, 10);
const lastDate = (parseInt(today.toISOString().substring(0, 4)) - 1).toString() + today.toISOString().substring(4, 10);
const nextDate = (parseInt(today.toISOString().substring(0, 4)) + 1).toString() + today.toISOString().substring(4, 10);


//Popular games api

const Popular_url = `games?key=${key}&dates=${lastDate},${todayDate}&ordering=-rating&page_size=10`;
const Upcoming_url = `games?key=${key}&dates=${todayDate},${nextDate}&ordering=-added&page_size=10`;
const NewGame_url = `games?key=${key}&dates=${lastDate},${todayDate}&ordering=-released&page_size=10`;
//final url

export const PopularGamesUrl = () => `${BASE_Url}${Popular_url}`;
export const UpcomingGamesUrl = () => `${BASE_Url}${Upcoming_url}`;
export const NewGamesUrl = () => `${BASE_Url}${NewGame_url}`;
//games detai url
export const gameDetailUrl = (game_id) => `${BASE_Url}games/${game_id}?key=${key}`;
export const gameScreenlUrl = (game_id) => `${BASE_Url}games/${game_id}/screenshots?key=${key}`;
export const gameSearchlUrl = (game_name) => `${BASE_Url}games?search=${game_name}&page_size=9&key=${key}`;

// console.log(PopularGamesUrl());
// console.log(UpcomingGamesUrl());
// console.log(NewGamesUrl());
// console.log(gameDetailUrl(game_id));

