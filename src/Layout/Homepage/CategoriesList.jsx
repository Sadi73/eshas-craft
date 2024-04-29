import React from 'react';
import { TbSquareAsterisk } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const categories = ['Wooden Furniture & Sculptures', 'Wooden Home Decor', 'Wooden Utensils and Kitchenware', 'Jute Home Decor', 'Jute Kitchenware & utensils', 'Jute and wooden jewellery']

const CategoriesList = () => {
    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='text-[#b18b5e] trirong-font text-5xl text-center'>Categories</h1>
            <p className='text-center'>------ You can find these kind of crafts ------</p>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide> */}
                {categories.map((category, index) =>
                    <SwiperSlide key={index} >
                        <span className={`category-${index} bg-red-300 w-[500px] h-[300px] flex justify-center items-center text-xl`}>
                            <h1>{category}</h1>
                        </span>
                    </SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default CategoriesList;