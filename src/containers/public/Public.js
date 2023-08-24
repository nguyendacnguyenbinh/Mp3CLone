import React from 'react';
import { Outlet } from 'react-router-dom';
import { Player, SidebarLeft, SidebarRight, Header } from '../../components/index';

function Public() {
    return (
        <div className="flex flex-col w-full min-h-screen relative bg-main-500 ">
            <div className="flex flex-auto w-full h-screen overflow-hidden">
                <div className="w-[240px] flex-none ">
                    <SidebarLeft />
                </div>
                <div className="flex-auto ">
                    <div className="h-[70px] px-[59px] flex items-center mb-7">
                        <Header />
                    </div>
                    <Outlet />
                </div>
                {/* <div className="w-[329px] flex-none border border-green-500">
                <SidebarRight />
            </div> */}
            </div>
            <div className="flex-none h-[90px] fixed right-0 left-0 bottom-0">
                <Player />
            </div>
        </div>
    );
}

export default Public;
