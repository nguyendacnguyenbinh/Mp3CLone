import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as apis from '../apis';
import { icons } from '../assets/Icon';
import * as actions from '../store/action';
import moment from 'moment/moment';

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
var intervalId;
const Player = () => {
    const [isLike, setIsLike] = useState(false);
    const { currentSong, isPlaying } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [duration, setDuration] = useState(0);
    const [curSeconds, setCurSeconds] = useState(0);

    const thumbR = useRef();

    const [audio, setAudio] = useState(new Audio());
    const dispatch = useDispatch();

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
                audio.pause();
                setAudio(new Audio(res2.data.data['128']));
            }
        };
        fetchDetailSong();
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            intervalId = setInterval(() => {
                let percents = Math.round((audio.currentTime * 10000) / audio.duration) / 100;
                thumbR.current.style.cssText = `right:${100 - percents}%`;
                setCurSeconds(Math.round(audio.currentTime));
            }, 100);
        } else {
            clearInterval(intervalId);
        }
    }, [isPlaying]);

    useEffect(() => {
        audio.load();
        if (isPlaying) {
            audio.play();
        }
    }, [audio]);

    const hanldeTogglePlayMusic = () => {
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false));
        } else {
            audio.play();
            dispatch(actions.play(true));
        }
    };

    const handleToggleLike = () => {
        setIsLike((prev) => !prev);
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
                    <span className="cursor-pointer" onClick={handleToggleLike}>
                        {isLike === false ? <GoHeart size={16} /> : <GoHeartFill size={16} />}
                    </span>
                    <span>
                        <BiDotsHorizontalRounded size={16} />
                    </span>
                </div>
            </div>
            <div className="w-[40%]  flex flex-col justify-center items-center text-white gap-2">
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
                <div className="w-full flex justify-around items-center gap-3 text-sx">
                    <span>{moment.utc(curSeconds * 1000 || 0).format('mm:ss')}</span>
                    <div className="w-3/4 h-[3px] m-auto relative bg-[hsla(0,0%,100%,0.3)] rounded-md">
                        <div
                            ref={thumbR}
                            className="h-[3px] absolute top-0 left-0  bg-white rounded-md"
                        ></div>
                    </div>
                    <span>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>
                </div>
            </div>
            <div className="w-[30%]">volume</div>
        </div>
    );
};

export default Player;
