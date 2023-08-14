import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight } from '../../components/index';

function Public() {
    return (
        <div className="flex w-full bg-[#170f23] ">
            <div className="w-[240px] flex-none border border-red-500">
                <SidebarLeft />
            </div>
            <div className="flex-auto">
                <Outlet />
            </div>
            <div className="w-[329px] flex-none border border-green-500">
                <SidebarRight />
            </div>
        </div>
    );
}

export default Public;
