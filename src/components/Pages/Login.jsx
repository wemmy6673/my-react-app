import React from 'react';

function Login(){
    return(
        <>
        <div className='bg-red-100 py-16'>
            <div className='flex flex-col space-y-6 w-3/4 md:w-1/3 mx-auto py-16 px-4 bg-white'>
                <h1 className='font-bold text-3xl'>Sign Up</h1>

                <div className="flex flex-col space-y-6">
                    <input type="text" placeholder="Your Name" className='border border-gray-300 py-3 px-1 rounded-md' />
                    <input type="email" placeholder="Email Address" className='border border-gray-300 py-3 px-1 rounded-md' />
                    <input type="password" placeholder="password" className='border border-gray-300 py-3 px-1 rounded-md' />

                    <button className='bg-red-600 text-white py-3 cursor'>Continue</button>

                    <h1 className='text-xs'>Already have an account? <span className='text-red-600'>Login here</span></h1>

                   <div className='flex flex-row space-x-3'> <input type='checkbox' />

                    <h1 className='text-xs'>By continuing, i agree to the terms of use & privacy policy</h1>
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}

export default Login;