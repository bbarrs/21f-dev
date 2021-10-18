const initialState = { data: null };

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'demoJson/fetch':
            return ({
                ...state,
                data: action.payload.data
            });
        default:
            return state;
    }
};

export default reducer;