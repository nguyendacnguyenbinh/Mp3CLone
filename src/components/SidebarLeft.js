import React from 'react';
import logo from '../assets/logo-dark.svg';
import { sidebarMenu } from '../ulti/menu';
import { NavLink } from 'react-router-dom';

const notActiveStyle =
    'flex items-center gap-3 text-[#fff] text-[13px] w-full h-10 py-2 px-[25px] font-bold';
const activeStyle =
    'flex items-center gap-3 text-[#fff] text-[13px]  bg-[#393142] w-full h-10 py-2 px-[25px] font-bold';
const SidebarLeft = () => {
    return (
        <div className="flex flex-col h-full bg-main-400">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex items-center justify-start">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[120px] h-10 object-contain"
                />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        className={({ isActive }) =>
                            isActive ? activeStyle : notActiveStyle
                        }
                    >
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
