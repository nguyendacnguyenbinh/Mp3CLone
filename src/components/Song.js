import React, { memo } from 'react';
import { icons } from '../assets/Icon';
import moment from 'moment';

const { FiMusic } = icons;

const Song = ({ songData }) => {
    return (
        <div className="flex items-center justify-between  p-[10px] border-t border-[#ffffff0d] text-gray-500 text-xs">
            <div className="flex flex-1 items-center gap-3 ">
                <span>
                    <FiMusic size={16} />
                </span>
                <img
                    src={songData.thumbnail}
                    alt="thumbnail"
                    className="w-10 h-10 object-cover rounded-md"
                />
                <div className="flex flex-col">
                    <span className="text-white text-sm truncate">{songData?.title}</span>
                    <span>{songData?.artistsNames}</span>
                </div>
            </div>
            <div className="flex flex-1 justify-center">{songData?.album?.title}</div>
            <div className="flex flex-1 justify-end">
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    );
};

export default memo(Song);
