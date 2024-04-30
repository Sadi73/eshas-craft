import React, { useEffect, useState } from 'react';
import { TbSquareAsterisk } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';

const AllCraft = () => {

    const [allCraft, setAllCraft] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://craft-by-esha.vercel.app/all')
            .then(res => res.json())
            .then(data => setAllCraft(data))

    }, []);

    return (

        <div className='pt-32 min-h-[90vh]'>
            <h1 className='text-5xl trirong-font text-center  mb-3'>All Craft Items</h1>
            <p className='text-lg trirong-font text-center mb-10'>-------- These craft items have been added by all users including you --------</p>

            <div className="overflow-x-auto pl-32">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Availability</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {allCraft.map(craft =>
                            <tr key={craft?._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={craft?.imageURL} alt="img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{craft?.name}</div>
                                            <div className="text-sm opacity-50">{craft?.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">${craft?.price}</div>
                                </td>
                                <td>
                                    <div className="font-bold">{craft?.availability}</div>
                                </td>
                                <th>
                                   <Link to={`/details/${craft?._id}`}> <button className="btn ">details</button></Link>
                                </th>
                            </tr>)

                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default AllCraft;