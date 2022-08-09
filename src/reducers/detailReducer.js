const initialState = {
    detail: { platforms: [] },
    screen: { results: [] },
    isLoading: true
}

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return ({
                ...state,
                detail: action.payload.gameDetail,
                screen: action.payload.gameScreen,
                isLoading: false
            });
        case "LOADING":
            return ({
                ...state,
                isLoading: true
            })
        default:
            return { ...state };
    }
}

export default detailReducer;