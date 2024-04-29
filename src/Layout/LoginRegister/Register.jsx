import React, { useContext, useState } from 'react';
// import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import ErrorTooltip from '../ErrorTooltip/ErrorTooltip';
import { AuthContext } from '../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
// import { GoEyeClosed } from 'react-icons/go';
// import { RxEyeOpen } from 'react-icons/rx';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate()

    const { registerWithEmailPassword } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loaderVisible, setLoaderVisible] = useState(false);

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required"),
            password: Yup.string()
                .required("Password is Required")
                .min(6, "Password must be at least 6 characters long")
                .matches(/^(?=.*[a-z])(?=.*[A-Z])/, "Password must contain at least one uppercase letter and one lowercase letter"),
            confirmPassword: Yup.string()
                .required("Confirm Password is Required")
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),

        }),
        onSubmit: (values) => {
            setLoaderVisible(true);
            registerWithEmailPassword(values?.email, values?.password)
                .then(result => {
                    setLoaderVisible(false);
                    toast.success('You have successfully registered', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        onClose: () => {
                            navigate('/');
                        }
                    });
                })
                .catch(error => {
                    setLoaderVisible(false);
                    setErrorMessage(error?.message.includes('auth/email-already-in-use') ? 'This email has already been used' : error?.message);
                })
        }
    });

    return (
        <>
            <ToastContainer />

            <div className='container py-20'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 mx-auto'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Sign <span className='text-[#E3B577]'>Up!</span></h1>

                    {errorMessage !== '' && <p className='text-red-600 font-medium mb-3'>{errorMessage}</p>}

                    <form onSubmit={handleSubmit}>


                        <div className='relative'>
                            <input
                                type="text"
                                name='email'
                                className={`w-full mb-4 py-2 pl-3 rounded-lg ${touched.email && errors.email && 'border-2 border-red-500'}`}
                                placeholder='Enter Your Email'
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.email && errors.email && (
                                <ErrorTooltip
                                    content={errors.email}
                                    placement="right"
                                />
                            )}
                        </div>

                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                className={`w-full mb-4 py-2 pl-3 rounded-lg ${touched.password && errors.password && 'border-2 border-red-500'}`}
                                placeholder='Enter Password'
                                value={values?.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {/* <span
                                className='absolute top-2.5 right-2.5'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                    <GoEyeClosed /> :
                                    <RxEyeOpen />
                                }
                            </span> */}

                            {touched.password && errors.password && (
                                <ErrorTooltip
                                    content={errors.password}
                                    placement="right"
                                />
                            )}
                        </div>


                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name='confirmPassword'
                                className={`w-full mb-4 py-2 pl-3 rounded-lg ${touched.confirmPassword && errors.confirmPassword && 'border-2 border-red-500'}`}
                                placeholder='Confirm Password'
                                value={values?.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                            {/* <span
                                className='absolute top-2.5 right-2.5'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                    <GoEyeClosed /> :
                                    <RxEyeOpen />
                                }
                            </span> */}

                            {touched.confirmPassword && errors.confirmPassword && (
                                <ErrorTooltip
                                    content={errors.confirmPassword}
                                    placement="right"
                                />
                            )}
                        </div>

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                        {loaderVisible && <span className="loading loading-dots loading-lg"></span>}

                    </form>

                    <div className="divider">OR</div>


                    {/* <div className='flex justify-center items-center gap-2'>
                        <button><AiFillGoogleCircle className='text-white text-3xl' /></button>
                    </div> */}

                    <div>
                        <p className='text-white text-center mt-4'>Already have an account? <Link to='/login' className='text-[#E3B577]'>Login</Link></p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Register;