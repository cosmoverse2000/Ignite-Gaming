
const initialState = {
    Popular: [],
    upcomingGames: [],
    newGames: [],
    search: []
}


const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                Popular: action.payload.popular.data.results,
                upcomingGames: action.payload.upcoming.data.results,
                newGames: action.payload.newgames.data.results
            };
        case "SEARCH":
            return {
                ...state,
                search: action.payload.search,
            };
        case "CLEAR_SEARCH":
            return {
                ...state,
                search: [],
            };
        default:
            return { ...state };

    }
}


////ACTION CREATOR//////////
// const fetchGames = (userData) => {
//     return (
//         {
//             type: "FETCH_GAMES",
//             payload: "",
//         }
//     );
// }
// useDispatch(fetchGames(userData));



//DIRECT ACTIONS & DISPATCH//////////
// useDispatch({type: "FETCH_GAMES"});

export default gameReducer;
