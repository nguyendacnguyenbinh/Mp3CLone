import React from 'react';
import { Outlet } from 'react-router-dom';
import { Player, SidebarLeft, SidebarRight } from '../../components/index';

function Public() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-main-500 ">
            <div className="flex flex-auto w-full h-full">
                <div className="w-[240px] flex-none ">
                    <SidebarLeft />
                </div>
                <div className="flex-auto ">
                    <Outlet />
                </div>
                {/* <div className="w-[329px] flex-none border border-green-500">
                <SidebarRight />
            </div> */}
            </div>
            <div className="flex-none h-[90px] ">
                <Player />
            </div>
        </div>
    );
}

export default Public;
