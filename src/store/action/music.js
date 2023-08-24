import actionType from './actionType';
import * as apis from '../../apis';

export const setCurSongId = (sid) => ({
    type: actionType.GET_CUR_SONG_ID,
    sid,
});

export const play = (flag) => ({
    type: actionType.PLAY,
    flag,
});
