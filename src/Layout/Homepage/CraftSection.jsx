import React, { useEffect, useState } from 'react';
import { TbSquareAsterisk } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const CraftSection = () => {
    const [allCraft, setAllCraft] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/all')
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
                        <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
                            <figure><img src={craft?.image} className='w-full h-64' alt="craft-image" /></figure>
                            <p className='absolute bg-green-500 text-white py-2 px-4 font-bold rounded-lg top-2 right-2'>{craft?.status}</p>
                            <div className="card-body" >
                                <p>{craft?.price}</p>
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{craft?.estate_title}</h2>
                                    <p className='grow-0 text-green-500'>{craft?.segment_name}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbSquareAsterisk />
                                    <p>{craft?.area}</p>
                                </div>
                                <p>{craft?.description}</p>
                                <div className="">
                                    <button className="btn bg-green-500 text-white hover:bg-green-600 w-full" onClick={() => navigate(`details/${craft?._id}`)}>View Property</button>
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