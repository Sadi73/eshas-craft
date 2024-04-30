import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { Helmet } from 'react-helmet-async';

const MyCreated = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [myCreatedCraft, setMyCreatedCraft] = useState([]);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [reload, setReload] = useState(false);


    const handleDeleteItem = () => {
        fetch(`https://craft-by-esha.vercel.app/delete/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount === 1) {
                    setConfirmModalVisible(false);
                    setReload(!reload);
                }
            })
    }

    useEffect(() => {
        fetch(`https://craft-by-esha.vercel.app/craft?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyCreatedCraft(data))
    }, [reload]);

    return (
        <div className='pt-32 mb-20 min-h-screen'>

            <Helmet>
                <title>Esha's Craft | My Created</title>
            </Helmet>

            <Modal
                title="Delete Item"
                style={{
                    top: 20,
                }}
                open={confirmModalVisible}
                onOk={() => handleDeleteItem()}
                onCancel={() => setConfirmModalVisible(false)}
            >
                <h1>Are you sure to delete this craft?</h1>
            </Modal>


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
                                <div className=" flex justify-between">
                                    <button className="btn bg-green-500 text-white hover:bg-green-600"
                                        onClick={() => navigate(`/update/${craft?._id}`)}
                                    >Edit</button>
                                    <button
                                        className="btn border border-red-500 bg-white text-red-500 hover:text-white hover:bg-red-600"
                                        onClick={() => {
                                            setIdToDelete(craft?._id);
                                            setConfirmModalVisible(true);
                                        }}
                                    >Delete</button>
                                    <button className="btn bg-green-500 text-white hover:bg-green-600"
                                        onClick={() => navigate(`/details/${craft?._id}`)}
                                    >View Product</button>
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