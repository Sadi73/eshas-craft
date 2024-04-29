import React, { useEffect } from 'react';

const MyCreated = () => {
    useEffect(()=>{
        fetch('http://localhost:3000/craft?email=saditanzim@gmail.com')
        .then(res=>res.json())
        .then(data => console.log(data))
    },[])
    
    return (
        <div>
            MyCreated
        </div>
    );
};

export default MyCreated;