import React, { useContext, useEffect } from 'react';
import './styles.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { AuthContext } from '../../Providers/AuthProvider';
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AddNewCraft = () => {
    const params = useParams();
    const { user } = useContext(AuthContext);

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched, resetForm } = useFormik({
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
        validationSchema: Yup.object({
            name: Yup.string().required("Craft name is Required"),
            description: Yup.string().required("Description is Required"),
            category: Yup.string().required("Category is Required"),
            price: Yup.string().required("price is Required"),
            imageURL: Yup.string().required("ImageURL is Required"),
            availability: Yup.string().required("Availability is Required"),
            color: Yup.string().required("Color is Required"),
        }),
        onSubmit: (values) => {
            const preparedData = { ...values, createdBy: user.email };

            if (params?.craftId) {
                fetch(`https://craft-by-esha.vercel.app/update/${params?.craftId}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(preparedData)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data?.acknowledged) {
                            toast.success('Craft Updated successfull', {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",

                            });
                            resetForm();

                        }
                    }
                    )
                    .catch(error => {
                        toast.warn('Something Wrong. Try again!!', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",

                        });
                    })
            } else {
                fetch('https://craft-by-esha.vercel.app/add', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(preparedData)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data?.acknowledged) {
                            toast.success('Craft Added successfull', {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",

                            });
                            resetForm();

                        }
                    }
                    )
                    .catch(error => {
                        toast.warn('Something Wrong. Try again!!', {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",

                        });
                    })
            }
        }
    });

    useEffect(() => {
        if (params?.craftId) {
            fetch(`https://craft-by-esha.vercel.app/details/${params?.craftId}`)
                .then(response => response.json())
                .then(data => {
                    debugger
                    // setDetails(data[0]);
                    // console.log(data);
                    setValues({
                        ...values,
                        name: data[0]?.name,
                        description: data[0]?.description,
                        category: data[0]?.category,
                        price: data[0]?.price,
                        imageURL: data[0]?.imageURL,
                        materialsUsed: data[0]?.materialsUsed,
                        craftingTechnique: data[0]?.craftingTechnique,
                        color: data[0]?.color,
                        availability: data[0]?.availability
                    })
                });
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>Esha's Craft | Add New</title>
            </Helmet>

            <ToastContainer />

            <div className='pt-20   mb-20'>
                <div className='md:w-[50%] bg-[#faf7f2] mx-auto py-10 pl-24'>
                    <h1 className='text-3xl text-center mb-4 font-medium trirong-font'>Add New Craft</h1>
                    <form onSubmit={handleSubmit}>
                        <table className=''>
                            <tbody>
                                <tr>
                                    <td className='w-1/4'>Craft Name <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.name && errors.name ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Craft Name'
                                            value={values?.name}
                                            name='name'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.name && errors.name && (
                                            <ErrorTooltip
                                                content={errors.name}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.description && errors.description ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Description'
                                            value={values?.description}
                                            name='description'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.description && errors.description && (
                                            <ErrorTooltip
                                                content={errors.description}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Category <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.category && errors.category ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Choose Category'
                                            value={values?.category}
                                            name='category'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.category && errors.category && (
                                            <ErrorTooltip
                                                content={errors.category}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.price && errors.price ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Price'
                                            value={values?.price}
                                            name='price'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.price && errors.price && (
                                            <ErrorTooltip
                                                content={errors.price}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>ImageURL <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.imageURL && errors.imageURL ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter ImageURL'
                                            value={values?.imageURL}
                                            name='imageURL'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.imageURL && errors.imageURL && (
                                            <ErrorTooltip
                                                content={errors.imageURL}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Materials Used</td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.materialsUsed && errors.materialsUsed ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Materials Used'
                                            value={values?.materialsUsed}
                                            name='materialsUsed'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.materialsUsed && errors.materialsUsed && (
                                            <ErrorTooltip
                                                content={errors.materialsUsed}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Crafting Technique</td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.craftingTechnique && errors.craftingTechnique ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Crafting Technique'
                                            value={values?.craftingTechnique}
                                            name='craftingTechnique'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.craftingTechnique && errors.craftingTechnique && (
                                            <ErrorTooltip
                                                content={errors.craftingTechnique}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Color <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.color && errors.color ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Choose Color'
                                            value={values?.color}
                                            name='color'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.color && errors.color && (
                                            <ErrorTooltip
                                                content={errors.color}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Availability <span className='text-red-500 text-xl'>*</span></td>
                                    <td className='relative'>
                                        <input
                                            type="text"
                                            className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.availability && errors.availability ? 'border-2 border-red-500' : ''}`}
                                            placeholder='Enter Availability'
                                            value={values?.availability}
                                            name='availability'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.availability && errors.availability && (
                                            <ErrorTooltip
                                                content={errors.availability}
                                                placement="right"
                                            />
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button type='submit' className='btn w-full bg-green-500 hover:bg-green-700 text-white'>Submit</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddNewCraft;