import React, { useState } from 'react'

function Strength() {
    const [weak, setWeak] = useState('opacity-0');
    const [medium, setMedium] = useState('opacity-0');
    const [strong, setStrong] = useState('opacity-0');
    const [message, setMessage] = useState('');

    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;


    const handleChange = (e) => {
        if (e.target.value === '') {
            setWeak('opacity-0');
            setMedium('opacity-0');
            setStrong('opacity-0');
            setMessage('')

        }
        else {
            if (e.target.value.length < 6) {
                setWeak('opacity-1');
                setMessage('Your Password is Weak.');
                setMedium('opacity-0');
                setStrong('opacity-0')
            }
            else {
                if (e.target.value.match(regExpWeak)) {
                    setWeak('opacity-1');
                    setMessage('Your Password is Weak.');
                    setMedium('opacity-0');
                    setStrong('opacity-0')
                }
                if (e.target.value.match(regExpMedium)) {
                    setMedium('opacity-1');
                    setMessage('Your Password is Medium.');
                }
                else {
                    setMedium('opacity-0');
                    setMessage('Your Password is Weak.');
                }
                if (e.target.value.match(regExpWeak) && e.target.value.match(regExpMedium) && e.target.value.match(regExpStrong)) {
                    setStrong('opacity-1');
                    setMessage('Your Password is Strong.');
                }
                else {
                    setStrong('opacity-0');
                    if (e.target.value.match(regExpMedium)) {
                        setMedium('opacity-1');
                        setMessage('Your Password is Medium.');
                    }
                    else {
                        setWeak('opacity-1');
                        setMessage('Your Password is Weak.');
                    }
                }
            }
        }

    }



    return (
        <>
            <div className='w-full flex justify-center items-center h-auto'>
                <div className='m-14 flex flex-col items-center rounded shadow-lg h-80 lg:w-3/6 p-4'>
                    <h1 className='text-3xl text-slate-600 text-center'>Strength Checker</h1>
                    <div className='flex flex-row font-bold text-white tracking-wider w-11/12 m-8 border rounded bg-gray-800 border-gray-800 outline-0'>
                        <input onChange={handleChange} type='text' name="password" className='font-bold text-white tracking-wider w-full bg-gray-800 border-gray-800 p-3 outline-0' placeholder='Enter Password' />
                    </div>
                    <div className='w-11/12 flex flex-row'>
                        <div className={`w-full mx-1 ${weak} bg-red-500 h-1 lg:h-2 rounded-full`} >
                        </div>
                        <div className={`w-full ${medium} mx-1 bg-orange-500 h-1 lg:h-2 rounded-full`} >
                        </div>
                        <div className={`w-full ${strong} mx-1 bg-green-500 h-1 lg:h-2 rounded-full`} >
                        </div>
                    </div>
                    <div className='text-left ml-2 font-bold w-11/12 mt-6'>{message}</div>
                </div>
            </div>
        </>
    )
}

export default Strength