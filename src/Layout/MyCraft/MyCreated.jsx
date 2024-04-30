import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const MyCreated = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [myCreatedCraft, setMyCreatedCraft] = useState([]);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [reload, setReload] = useState(false);


    const handleDeleteItem = () => {
        fetch(`http://localhost:3000/delete/${idToDelete}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount === 1) {
                    setReload(!reload);
                    toast('🦄 Wow so easy!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    setConfirmModalVisible(false);

                }
            })
    }

    useEffect(() => {
        fetch(`http://localhost:3000/craft?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyCreatedCraft(data))
    }, [reload]);

    return (
        <div className='pt-32 mb-20'>

            <ToastContainer />
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
                                    <button className="btn bg-green-500 text-white hover:bg-green-600">Edit</button>
                                    <button
                                        className="btn border border-red-500 bg-white text-red-500 hover:text-white hover:bg-red-600"
                                        onClick={() => {
                                            setIdToDelete(craft?._id);
                                            setConfirmModalVisible(true);
                                        }}
                                    >Delete</button>
                                    <button className="btn bg-green-500 text-white hover:bg-green-600" onClick={() => navigate(`/details/${craft?._id}`)}>View Product</button>
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