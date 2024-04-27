import React from 'react';

const categories = ['Wooden Furniture & Sculptures', 'Wooden Home Decor', 'Wooden Utensils and Kitchenware', 'Jute Home Decor', 'Jute Kitchenware & utensils', 'Jute and wooden jewellery']

const CategoriesList = () => {
    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='text-[#b18b5e] trirong-font text-5xl text-center'>Categories</h1>
            <p className='text-center'>------ You can find these kind of crafts ------</p>

            <div className='grid md:grid-cols-3 gap-5'>
                {categories.map(caregory => <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default CategoriesList;