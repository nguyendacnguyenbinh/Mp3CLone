import React from 'react';
import { Song } from './';

const ListSong = ({ songs, totalDuration }) => {
    console.log(songs, totalDuration);
    return (
        <div className="flex flex-col text-sx">
            <div className="flex justify-between items-center p-[10px] text-gray-600">
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className="flex flex-col ">
                {songs?.map((song) => (
                    <Song key={song?.encodeId} songData={song} />
                ))}
            </div>
        </div>
    );
};

export default ListSong;
