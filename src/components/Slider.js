import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArrSlider } from '../ulti/fn';

const Slider = () => {
    const { banner } = useSelector((state) => state.app);

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        console.log(sliderEls.length);
        let min = 0;
        let max = 2;

        const invalid = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length);
            for (let i = 0; i < sliderEls.length; i++) {
                console.log(min, max);
                // if (list.some((item) => item === i)) {
                //     sliderEls[i].style.display = 'block';
                // } else {
                //     sliderEls[i].style.display = 'none';
                // }
            }

            if ((min = sliderEls.length - 1)) {
                min = 0;
            } else {
                min += 1;
            }
            if ((max = sliderEls.length - 1)) {
                max = 0;
            } else {
                max += 1;
            }
        }, 2000);

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
