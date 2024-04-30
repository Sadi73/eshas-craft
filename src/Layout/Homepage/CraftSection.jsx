import React, { useEffect, useState } from 'react';
import { TbSquareAsterisk } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const CraftSection = () => {
    const [allCraft, setAllCraft] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://craft-by-esha.vercel.app/all')
            .then(res => res.json())
            .then(data => setAllCraft(data))

    }, []);

    return (
        <div className='w-[80%] mx-auto my-10'>
            <h1 className='text-[#b18b5e] trirong-font text-5xl text-center'>Craft Items</h1>
            <p className='text-center'>------ You can find these kind of crafts ------</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto'>

                {allCraft.map(craft =>
                    <div key={craft?._id} data-aos="fade-up">
                        <div className="card card-compact  bg-base-100 shadow-xl h-[420px]">
                            <figure><img src={craft?.imageURL} className='w-full h-48' alt="craft-image" /></figure>
                            <div className="card-body text-center" >
                                <h2 className="text-3xl font-bold text-center">{craft?.name}</h2>
                                <p>{craft?.price}</p>
                                <p>Availability: {craft?.availability}</p>
                                <div className="">
                                    <button className="btn bg-green-500 text-white hover:bg-green-600 w-full" onClick={() => navigate(`details/${craft?._id}`)}>View Product</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        </div >
    );
};

export default CraftSection;