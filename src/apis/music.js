import axios from '../axios';

export const apiGetSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/song',
                method: 'get',
                params: { id: sid },
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
export const apiGetDetailSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/infosong',
                method: 'get',
                params: { id: sid },
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
export const apiGetDetailPlaylist = (pid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: '/detailplaylist',
                method: 'get',
                params: { id: pid },
            });
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
