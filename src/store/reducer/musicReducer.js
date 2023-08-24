// Luu cac variabel va cac state

import actionType from '../action/actionType';

const initState = {
    currentSong: null,
    isPlaying: false,
};

const musicReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_CUR_SONG_ID:
            return { ...state, currentSong: action.sid || null };
        case actionType.PLAY:
            return { ...state, isPlaying: action.flag };

        default:
            return state;
    }
};

export default musicReducer;
