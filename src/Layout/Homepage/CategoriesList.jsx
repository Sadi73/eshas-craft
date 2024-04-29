import React from 'react';
import { TbSquareAsterisk } from 'react-icons/tb';

const categories = ['Wooden Furniture & Sculptures', 'Wooden Home Decor', 'Wooden Utensils and Kitchenware', 'Jute Home Decor', 'Jute Kitchenware & utensils', 'Jute and wooden jewellery']

const CategoriesList = () => {
    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='text-[#b18b5e] trirong-font text-5xl text-center'>Categories</h1>
            <p className='text-center'>------ You can find these kind of crafts ------</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto'>
                {categories.map(caregory =>
                    <div key={caregory?._id} data-aos="fade-up">
                        <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
                            <figure><img src={caregory?.image} className='w-full h-64' alt="caregory-image" /></figure>
                            <p className='absolute bg-green-500 text-white py-2 px-4 font-bold rounded-lg top-2 right-2'>{caregory?.status}</p>
                            <div className="card-body" >
                                <p>{caregory?.price}</p>
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{caregory?.estate_title}</h2>
                                    <p className='grow-0 text-green-500'>{caregory?.segment_name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbSquareAsterisk />
                                    <p>{caregory?.area}</p>
                                </div>
                                <p>{caregory?.description}</p>
                                <div className="">
                                    <button className="btn bg-green-500 text-white hover:bg-green-600 w-full"
                                        // onClick={() => navigate(`details/${caregory?.id}`)}
                                    >View Property</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    );
};

export default CategoriesList;