import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';


const Details = () => {

    const params = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch(`https://craft-by-esha.vercel.app/details/${params?.craftId}`)
            .then(response => response.json())
            .then(data => {
                setDetails(data[0]);
            });
    }, []);


    return (
        <div className='py-32'>

            <Helmet>
                <title>Esha's Craft | Details</title>
            </Helmet>

            <h1 className='text-5xl text-center outfit-font'>Item Details</h1>

            <div className="card lg:card-side bg-base-100 shadow-xl  md:w-[80%] mx-auto  mb-20 min-h-[500px]">
                <figure><img src={details?.imageURL} alt="Album" className='h-96 ml-10' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details?.name}</h2>
                    <p>{details?.description}</p>

                    <p>Category: {details?.category}</p>
                    <p>Color: {details?.color}</p>
                    <p>Available: {details?.availability}</p>
                    <p>Created By: {details?.createdBy}</p>

                </div>
            </div>
        </div>
    );
};

export default Details;