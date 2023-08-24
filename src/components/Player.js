import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as apis from '../apis';
import { icons } from '../assets/Icon';

const {
    GoHeartFill,
    GoHeart,
    BiDotsHorizontalRounded,
    BiSkipNext,
    BiSkipPrevious,
    GoPlay,
    RxShuffle,
    FiRepeat,
    FiPauseCircle,
} = icons;
const Player = () => {
    const audioEl = new Audio(
        'https://mp3-s1-zmp3.zmdcdn.me/2342fbbac2f92ba772e8/5342545028580690751?authen=exp=1692866402~acl=/2342fbbac2f92ba772e8/*~hmac=dd6f60f2c5bfbc7a6271206473694710&fs=MTY5MjY5MzYwMjg3MHx3ZWJWNnwwfDExMy4xNjQdUngODAdUngMTYw',
    );
    const { currentSong, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [source, setSource] = useState(null);

    // const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(currentSong),
                apis.apiGetSong(currentSong),
            ]);

            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
            }
            if (res2.data.err === 0) {
                setSource(res1.data.data['128']);
            }
        };
        fetchDetailSong();
    }, [currentSong]);

    useEffect(() => {
        // audioEl.play();
    }, []);

    const hanldeTogglePlayMusic = () => {
        // setIsPlaying((prev) => !prev);
    };

    return (
        <div className="h-full px-5 bg-main-600 flex py-2 border border-border-player">
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
            <div className="w-[40%]  flex flex-col justify-center items-center text-white ">
                <div className=" flex gap-8 justify-center items-center">
                    <span className="cursor-pointer" title="Bật phát ngẫu nhiên">
                        <RxShuffle size={18} />
                    </span>
                    <span className="cursor-pointer">
                        <BiSkipPrevious size={34} />
                    </span>
                    <span
                        className="hover:text-link-text-hover cursor-pointer"
                        onClick={hanldeTogglePlayMusic}
                    >
                        {isPlaying ? <FiPauseCircle size={40} /> : <GoPlay size={40} />}
                    </span>
                    <span className="cursor-pointer">
                        <BiSkipNext size={34} />
                    </span>
                    <span className="cursor-pointer" title="Bật phát lại tất cả">
                        <FiRepeat size={18} />
                    </span>
                </div>
                <div>Process bar</div>
            </div>
            <div className="w-[30%]">volume</div>
        </div>
    );
};

export default Player;
