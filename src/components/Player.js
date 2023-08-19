import React from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
    const { currentSong } = useSelector((state) => state.music);
    console.log(currentSong);
    return (
        <div className="h-full px-5 bg-main-600 flex">
            <div className="w-[30%]">detail</div>
            <div className="w-[40%]">player</div>
            <div className="w-[30%]">volume</div>
        </div>
    );
};

export default Player;
