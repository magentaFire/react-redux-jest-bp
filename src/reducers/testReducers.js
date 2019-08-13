const initialState = {
    citas: [1, 2, 3, 4]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case '1':
            return {
                ...state,
                citas: [...state.citas, action.payload]
            };
        default:
            return state;
    }
};
