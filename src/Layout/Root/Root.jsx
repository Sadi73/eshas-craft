import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Homepage/Navbar';
import { AuthContext } from '../../Providers/AuthProvider';
import { ThreeCircles } from 'react-loader-spinner';

const Root = () => {
    const { loader } = useContext(AuthContext);

    return (
        loader ?
            <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> :

            <div>
                < Navbar />
                <Outlet />
            </div >
    );
};

export default Root;