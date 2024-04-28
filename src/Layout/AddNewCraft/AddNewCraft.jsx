import React, { useContext } from 'react';
import './styles.css';
import { useFormik } from 'formik';
import { AuthContext } from '../../Providers/AuthProvider';

const AddNewCraft = () => {
    const { user } = useContext(AuthContext);

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            name: '',
            description: '',
            category: '',
            price: '',
            imageURL: '',
            materialsUsed: '',
            craftingTechnique: '',
            color: '',
            availability: ''
        },
        // validationSchema: Yup.object({
        //     email: Yup.string().required("Email is Required"),
        //     password: Yup.string().required("Password is Required")
        // }),
        onSubmit: (values) => {
            const preparedData = { ...values, createdBy: user.email };


            fetch('http://localhost:3000/add', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(preparedData)
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    });


    return (
        <div className='pt-20  bg-[#faf7f2]'>
            <div className='md:w-[50%] mx-auto'>
                <form onSubmit={handleSubmit}>
                    <table className=''>
                        <tbody>
                            <tr>
                                <td className='w-1/4'>Craft Name</td>
                                <td><input name='name' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><input name='description' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td><input name='category' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td><input name='price' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>ImageURL</td>
                                <td><input name='imageURL' onChange={handleChange} /></td>
                            </tr>
                            {/* <tr>
                                <td>Materials Used</td>
                                <td><input name='materialsUsed' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Crafting Technique</td>
                                <td><input name='craftingTechnique' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td><input name='color' onChange={handleChange} /></td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td><input name='availability' onChange={handleChange} /></td>
                            </tr> */}
                            <tr>
                                <td></td>
                                <td><button type='submit' className='btn w-full'>Submit</button></td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
};

export default AddNewCraft;