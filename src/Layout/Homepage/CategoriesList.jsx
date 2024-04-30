import React from 'react';
import { } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../../src/assets/1.jpg';
import img2 from '../../../src/assets/2.jpg';
import img3 from '../../../src/assets/3.jpg';
import img4 from '../../../src/assets/4.jpg';
import img5 from '../../../src/assets/5.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

const images = [img1, img2, img3, img4, img5]

const categories = ['Wooden Furniture & Sculptures', 'Wooden Home Decor', 'Wooden Utensils and Kitchenware', 'Jute Home Decor', 'Jute Kitchenware & utensils', 'Jute and wooden jewellery']

const CategoriesList = () => {
    return (
        <div className='w-[80%] mx-auto my-20'>
            <h1 className='text-[#b18b5e] trirong-font text-5xl text-center'>Categories</h1>
            <p className='text-center mb-10'>------ You can find these kind of crafts ------</p>

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
                {categories.map((category, index) =>
                    <SwiperSlide key={index} >

                        <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${images[index]})` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-5xl font-bold">{category}</h1>
                                   
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)}

            </Swiper>
        </div>
    );
};

export default CategoriesList;