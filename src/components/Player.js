import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../apis';
import { icons } from '../assets/Icon';

const { GoHeartFill, GoHeart, BiDotsHorizontalRounded } = icons;
const Player = () => {
    const { currentSong } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchDetailSong = async () => {
            const response = await apis.getDetailSong(currentSong);
            if (response.data.err === 0) {
                setSongInfo(response.data.data);
            }
        };
        fetchDetailSong();
    }, [currentSong]);

    return (
        <div className="h-full px-5 bg-main-600 flex">
            <div className="w-[30%] flex items-center gap-3">
                <img
                    src={songInfo?.thumbnail}
                    alt=""
                    className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex flex-col">
                    <span className="font-semibold text-white text-sm">{songInfo?.title}</span>
                    <span className="text-[#ffffff80] text-[12px]">{songInfo?.artistsNames}</span>
                </div>
                <div className="text-white flex gap-4 justify-around pl-2">
                    <span>
                        <GoHeart size={16} />
                    </span>
                    <span>
                        <BiDotsHorizontalRounded size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%]">player</div>
            <div className="w-[30%]">volume</div>
        </div>
    );
};

export default Player;
