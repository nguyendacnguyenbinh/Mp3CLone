// Luu cac variabel va cac state

import actionType from '../action/actionType';

const initState = {
    currentSong: null,
};

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CUR_SONG_ID:
            return { ...state, currentSong: action.sid || null };

        default:
            return state;
    }
};

export default musicReducer;
