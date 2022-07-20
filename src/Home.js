import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import copy from 'copy-to-clipboard';
import { FaTimes } from "react-icons/fa";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AllLength = [8, 10, 12, 14, 16, 20];
const PassItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9, '@', '#', '$', '%', '&', '?', '+']

export default function Home() {
    const [alert, setAlert] = useState('opacity-0')
    const [passLength, setPassLength] = useState(8);
    const [Password, setPassword] = useState('');
    const handleClick = () => {
        setPassword('');
        let string = '';
        for (let i = 0; i < passLength; i++) {
            string += PassItems[Math.floor(Math.random() * PassItems.length)];
            setPassword(string)
        }
    }
    const handleCopy = () => {
        setAlert('opacity-1')
        copy(Password);
        window.setTimeout(() => {
            setAlert('opacity-0')
        }, 3000)
    }


    return (
        <>
            <div className={`w-80 flex flex-row items-center justify-between transition-all ease-in-out delay-100 duration-750 bg-red-900 ${alert} z-10 rounded mr-4 mt-1 text-white px-6 py-3 right-4 float-right`}>
                <div>Successfully Copied...</div>
                <FaTimes onClick={() => setAlert('opacity-0')} className='text-xl cursor-pointer' />
            </div>
            <div className='z-0 w-full flex justify-center items-center h-auto'>
                <div className='m-10 flex flex-col items-center rounded shadow-lg h-80 lg:w-3/6 p-4'>
                    <h1 className='text-3xl text-slate-600 text-center'>Password Generator</h1>
                    <div className='flex flex-row font-bold text-white tracking-wider w-11/12 m-8 border rounded bg-gray-800 border-gray-800 outline-0'>
                        <input type='text' readOnly value={Password} name="password" className='font-bold text-white tracking-wider w-full bg-gray-800 border-gray-800 p-3 outline-0' placeholder='Your Password will appear here' />
                        <button className='p-2 mr-2 text-white justify-center text-sm font-medium' onClick={handleCopy}>Copy</button>
                    </div>

                    <div className='flex flex-row'>
                        <button className='p-2 mr-2 text-white justify-center rounded-md border border-gray-300 shadow-sm bg-gray-800 text-sm font-medium hover:bg-gray-50 hover:text-sky-400' onClick={handleClick}>Generate Password</button>
                        <Menu as="div" className="ml-2 justify-center align-center relative inline-block text-left">
                            <div>
                                <Menu.Button className="text-slate-400 inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    Password Length : {passLength}
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {
                                            AllLength.map((data) => {
                                                return (
                                                    <div key={data}>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <div
                                                                    onClick={() => setPassLength(data)}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    {data}
                                                                </div>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                </div>
            </div>
        </>
    )
}