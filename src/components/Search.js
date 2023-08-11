import { GoSearch } from 'react-icons/go';

function Search() {
    return (
        <div className="flex items-center max-w-[440px] w-full bg-[#ffffff1a]  rounded-full">
            <GoSearch size={24} className="mx-2" />
            <input
                type="search"
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                className="h-10 outline-none w-[90%] bg-transparent placeholder:text-[#eee]"
            />
        </div>
    );
}

export default Search;
