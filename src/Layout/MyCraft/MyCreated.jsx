import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { TbSquareAsterisk } from 'react-icons/tb';

const MyCreated = () => {
    const { user } = useContext(AuthContext);

    const [myCreatedCraft, setMyCreatedCraft] = useState([])

    useEffect(() => {
        fetch(`https://craft-by-esha.vercel.app/craft?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyCreatedCraft(data))
    }, []);

    console.log(user.email)

    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto'>

                {myCreatedCraft.map(craft =>
                    <div key={craft?._id} data-aos="fade-up">
                        <div className="card card-compact  bg-base-100 shadow-xl h-[500px]">
                            <figure><img src={craft?.imageURL} className='w-full h-64' alt="craft-image" /></figure>
                            {/* <p className='absolute bg-green-500 text-white py-2 px-4 font-bold rounded-lg top-2 right-2'>{craft?.status}</p> */}
                            <div className="card-body" >
                                <p>${craft?.price}</p>
                                <div className='flex items-center justify-between'>
                                    <h2 className="card-title">{craft?.name}</h2>
                                    <p className='grow-0 text-green-500'>{craft?.description}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <TbSquareAsterisk />
                                    <p>{craft?.createdBy}</p>
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
        </div>
    );
};

export default MyCreated;