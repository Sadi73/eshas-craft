import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { TbSquareAsterisk } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const MyCreated = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [myCreatedCraft, setMyCreatedCraft] = useState([])

    useEffect(() => {
        fetch(`https://craft-by-esha.vercel.app/craft?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyCreatedCraft(data))
    }, []);

    console.log(user.email)

    return (
        <div className='pt-32 mb-20'>
            <h1 className='text-5xl text-center trirong-font mb-10'>My Created Crafts</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto'>

                {myCreatedCraft.map(craft =>
                    <div key={craft?._id} data-aos="fade-up">
                        <div className="card card-compact  bg-base-100 shadow-xl h-[420px]">
                            <figure><img src={craft?.imageURL} className='w-full h-48' alt="craft-image" /></figure>
                            <div className="card-body text-center" >
                                <h2 className="text-3xl font-bold text-center">{craft?.name}</h2>
                                <p>${craft?.price}</p>
                                <p>Availability: {craft?.availability}</p>
                                <div className="">
                                    <button className="btn bg-green-500 text-white hover:bg-green-600 w-full" onClick={() => navigate(`/details/${craft?._id}`)}>View Product</button>
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