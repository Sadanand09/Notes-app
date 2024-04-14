    import React,{useEffect,useState} from 'react';
    import {auth, provider} from '../components/config';
    import { signInWithPopup } from 'firebase/auth';
    import Home from './Home';

    function Login() {
        
        const [value, setValue] = useState('');
        const handleClick = () =>
        {
            signInWithPopup(auth,provider).then((data)=>{
                setValue(data.user.email);
                localStorage.setItem("email",data.user.email)
            })
        }

        useEffect(()=>{
            setValue(localStorage.getItem('email'))
        })

        



    return (
        <>
        {/* {value?<Home/>: */}
            
            <section className="text-gray-600 body-font overflow-hidden bg-gray-50 shadow-inner">
            <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap-reverse ">
                {/* <img alt="ecommerce" className="lg:w-6/12 w-64 mx-auto  lg:h-auto h-64 object-cover object-center rounded" src={Image4} /> */}

                <div className="lg:w-6/12 md:w-1/2 mx-auto px-10  justify-center text-center bg-gray-100 select-none  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 lg:text-6xl text-4xl  font-extrabold title-font mb-8">Welcome to Om's Notes</h2>
                <h2 className="text-gray-900 text-lg font-extrabold title-font mb-5 opacity-70">Step Inside and Unlock the Notes with Ease!</h2>
                <div className=' flex mx-auto '>
                    <button onClick={handleClick} className=" border border-blue-600 my-4  rounded-sm drop-shadow-sm  flex ">
                    <span className='flex justify-center align-middle ' >
                        <img src='https://cdn-icons-png.flaticon.com/128/300/300221.png' className='h-5 my-auto mx-3  ' alt='G-logo' />
                        <h1 className='font-semibold hover:bg-blue-700 bg-blue-600 p-2 pe-5 text-gray-200'>Login with Google</h1>
                    </span>
                    </button>
                </div>
                <p className="text-xs text-black font-extrabold opacity-30 mt-3">Seamless Access to our Notes: Unlock the Door to those Serect Notes!</p>
                </div>
                
            </div>
            </div>
        </section>
        {/* } */}
        </>
    )
    }

    export default Login