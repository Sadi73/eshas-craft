import React, { useEffect, useState } from 'react';

const AllCraft = () => {

    const [allCraft, setAllCraft] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/all')
            .then(res => res.json())
            .then(data => setAllCraft(data))

    }, []);

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5'>
                {allCraft.map(craft => <div className="card card-compact  bg-base-100 shadow-xl">
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

export default AllCraft;