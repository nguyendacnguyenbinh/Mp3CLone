import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
    const { banner } = useSelector((state) => state.app);

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        let min = 0;
        let max = 2;

        const invalid = setInterval(() => {
            for (let i = 0; i < sliderEls.length; i++) {
                if (i <= max && i >= min) {
                    sliderEls[i].style.display = 'block';
                } else {
                    sliderEls[i].style.display = 'none';
                }
            }
        }, 1000);

        return () => {
            invalid && clearInterval(invalid);
        };
    }, []);
    return (
        <div className="flex gap-4 w-full overflow-x-hidden px-[59px] pt-8 ">
            {banner?.map((item) => (
                <img
                    key={item.encodeId}
                    alt=""
                    src={item.banner}
                    className="slider-item flex-1 object-contain w-1/3 rounded-lg"
                />
            ))}
        </div>
    );
};

export default Slider;
