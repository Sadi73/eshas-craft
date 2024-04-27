import React, { useContext } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
    const navigate = useNavigate();

    const { signInWithGoogle } = useContext(AuthContext)

    const { values, setValues, handleSubmit, handleBlur, handleChange, errors, setErrors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required"),
            password: Yup.string().required("Password is Required")
        }),
        onSubmit: (values) => {

            console.log(values)
        }
    });

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user.email);
                if (result?.user?.email) {
                    navigate('/');
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <>

            <div className='container py-20'>

                <div className='form-container bg-black bg-opacity-40 md:max-w-[500px] p-12 mx-auto'>
                    <h1 className='text-white text-5xl text-center mb-10 font-rancho'>Log <span className='text-[#E3B577]'>In!</span></h1>


                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className='relative'>
                            <input
                                type="text"
                                name='email'
                                className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.email && errors.email ? 'border-2 border-red-500' : ''}`}
                                placeholder='Enter Your Email'
                                value={values?.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* {touched.email && errors.email && (
                                <ErrorTooltip
                                    content={errors.email}
                                    placement="right"
                                />
                            )} */}
                        </div>

                        <div className='relative'>
                            <input
                                // type={showPassword ? "text" : "password"}
                                name='password'
                                className={`w-full mb-4  py-2 pl-3  rounded-lg ${touched.password && errors.password ? 'border-2 border-red-500' : ''}`}
                                placeholder='Enter Password'
                                value={values?.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* <span className='absolute top-2.5 right-2.5' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <GoEyeClosed /> :
                                    <RxEyeOpen />
                                }
                            </span> */}

                            {/* {touched.password && errors.password && (
                                <ErrorTooltip
                                    content={errors.password}
                                    placement="right"
                                />
                            )} */}
                        </div>

                        <button type='submit' className='common-button bg-[#E3B577] w-full py-3 rounded-lg'>Submit</button>

                        {/* {loaderVisible && <span className="loading loading-dots loading-lg"></span>} */}

                    </form>

                    <div className="divider">OR</div>

                    <div className='flex justify-center items-center gap-2'>
                        <button>
                            <AiFillGoogleCircle
                                className='text-white text-3xl'
                                onClick={handleGoogleSignIn}

                            />
                        </button>

                        <button>
                            <FaGithub
                                className='text-white text-2xl'
                            // onClick={handleGithubSignIn}
                            />
                        </button>
                    </div>

                    <div>
                        <p className='text-white text-center mt-4'>New here? Please <Link to='/register' className='text-[#E3B577]'>Register</Link></p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;