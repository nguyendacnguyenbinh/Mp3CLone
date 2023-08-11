import { UserGroupIcon, LibraryIcon, ZingChart, ExploreIcon } from '../assets/index';

export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <UserGroupIcon />,
    },
    {
        path: '',
        text: 'Khám phá',
        icon: <ExploreIcon />,
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <ZingChart />,
    },
    {
        path: 'library',
        text: 'Thư viện',
        icon: <LibraryIcon />,
    },
];
