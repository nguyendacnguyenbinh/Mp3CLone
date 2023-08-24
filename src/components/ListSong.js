import React from 'react';
import { Song } from './';
import { icons } from '../assets/Icon';
import moment from 'moment';

const { BsDot } = icons;

const ListSong = ({ songs, totalDuration }) => {
    return (
        <div className="flex flex-col text-sx mb-[30px]">
            <div className="flex justify-between items-center p-[10px] text-gray-600">
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className="flex flex-col w-full ">
                {songs?.map((song) => (
                    <Song key={song?.encodeId} songData={song} />
                ))}
            </div>
            <span className="flex mt-4 text-gray-500 text-[13px] items-center ">
                <span>{songs?.length} bài hát</span>
                <BsDot />
                <span> {moment.utc(totalDuration * 1000).format('h giờ mm')}</span>
            </span>
        </div>
    );
};

export default ListSong;
