import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArrSlider } from '../ulti/fn';
import * as action from '../store/action';

const Slider = () => {
    const { banner } = useSelector((state) => state.app);
    const { playlist } = useSelector((state) => state.app);
    const dispatch = useDispatch();

    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item');
        let min = 0;
        let max = 2;

        const invalid = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length);

            // Delete animation
            for (let i = 0; i < sliderEls.length; i++) {
                sliderEls[i].classList.remove(
                    'animate-slide-right',
                    'order-last',
                    'z-20',
                );
                sliderEls[i].classList.remove(
                    'animate-slide-left',
                    'order-first',
                    'z-10',
                );
                sliderEls[i].classList.remove(
                    'animate-slide-left2',
                    'order-2',
                    'z-10',
                );

                // Hide or show the slider

                if (list.some((item) => item === i)) {
                    sliderEls[i].style.display = 'block';
                } else {
                    sliderEls[i].style.display = 'none';
                }
            }

            // Add animation
            list.forEach((item) => {
                if (item === max) {
                    sliderEls[item].classList.add(
                        'animate-slide-right',
                        'order-last',
                        'z-20',
                    );
                } else if (item === min) {
                    sliderEls[item].classList.add(
                        'animate-slide-left',
                        'order-first',
                        'z-10',
                    );
                } else {
                    sliderEls[item].classList.add(
                        'animate-slide-left2',
                        'order-2',
                        'z-10',
                    );
                }
            });

            min = min === sliderEls.length - 1 ? 0 : min + 1;
            max = max === sliderEls.length - 1 ? 0 : max + 1;
        }, 4000);

        return () => {
            invalid && clearInterval(invalid);
        };
    }, []);

    const handleClickBanner = (item) => {
        if (item.type === 1) {
            dispatch(action.setCurSongId(item.encodeId));
        }
    };
    return (
        <div className="flex gap-8 w-full overflow-hidden px-[59px] pt-8 ">
            {banner?.map((item, index) => (
                <img
                    key={item.encodeId}
                    alt=""
                    src={item.banner}
                    onClick={() => handleClickBanner(item)}
                    className={`slider-item flex-1 object-cover w-[30%] h-[210px] rounded-lg ${
                        index <= 2 ? 'block' : 'hidden'
                    }`}
                />
            ))}
        </div>
    );
};

export default Slider;
