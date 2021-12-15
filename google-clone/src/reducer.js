//what the data layer looks like.. this is an object.. this is where the data lives
export const initialState = {
    term: null,
};

//we need to dispatch an action to change the data in the data layer..
export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
};

// here the state is the state of the data layer and the action is what we are dispatching in the context API

// the reducers job is to listen to the change
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term,
            };

            default: 
            return state;
    }
};

export default reducer;