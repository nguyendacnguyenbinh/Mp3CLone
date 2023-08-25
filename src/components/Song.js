import React, { memo } from 'react';
import { icons } from '../assets/Icon';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import * as actions from '../store/action';

const { FiMusic } = icons;

const Song = ({ songData }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex w-100% items-center justify-between text-left p-[10px] border-t border-[#ffffff0d] text-gray-500 text-xs hover:bg-bg-hover ">
            <div
                className="flex flex-1 w-1/2 items-center gap-3 "
                onClick={() => {
                    dispatch(actions.setCurSongId(songData?.encodeId));
                    dispatch(actions.play(true));
                }}
            >
                <span>
                    <FiMusic size={16} />
                </span>
                <img
                    src={songData.thumbnail}
                    alt="thumbnail"
                    className="w-10 h-10 object-cover rounded-md cursor-pointer"
                />
                <div className="flex flex-col">
                    <span className="text-white text-sm truncate">{songData?.title}</span>
                    <span className="cursor-pointer">{songData?.artistsNames}</span>
                </div>
            </div>
            <div className="flex flex-1 justify-center cursor-pointer truncate">
                {songData?.album?.title}
            </div>
            <div className="flex flex-1 justify-end">
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    );
};

export default memo(Song);
