import { icons } from '../assets';
import { Search } from './';

const { GoArrowRight, GoArrowLeft } = icons;

function Header() {
    return (
        <div className="w-full flex justify-between text-[#f3f3f4]">
            <div className="flex w-full items-center">
                <div className="flex text-[#5a5563]">
                    <span className=" mr-[20px]">
                        <GoArrowLeft size={24} />
                    </span>
                    <span className=" mr-[20px]">
                        <GoArrowRight size={24} />
                    </span>
                </div>
                <Search />
            </div>
            <div>dang nhap</div>
        </div>
    );
}

export default Header;
