// Luu cac variabel va cac state

import actionType from '../action/actionType';

const initState = {
    homeData: [],
    text: 'hello world',
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_DATA:
            return state;

        default:
            return state;
    }
};

export default appReducer;
