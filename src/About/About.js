/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { FaLinkedinIn, FaGithubAlt, FaInstagram } from "react-icons/fa";

export default function About() {

    return (
        <>


            <div className="mt-12">
                <div className="flex flex-col sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 text-lg font-bold sm:text-center">
                            <div className="mt-3 underline text-center sm:mt-0 sm:ml-4 text-lg font-bold sm:text-center">
                                About Developer
                            </div>
                            <div className="no-underline mt-4">
                                <p className="no-underline text-sm font-normal text-gray-500 sm:text-center">
                                    Hey, I'm RAHUL RAJPUT. I have create this Password Generator and Strength Checker. If you like my work, do follow me on my social accounts.
                                </p>
                            </div>

                            <div className='no-underline flex mt-10 flex-row justify-center'>
                                <a href='https://www.linkedin.com/in/rahulrajput83/' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-700 text-white hover:bg-red-100 cursor-pointer hover:text-black sm:mx-2.5 sm:h-10 sm:w-10">
                                    <FaLinkedinIn />
                                </a>
                                <a href='https://github.com/rahulrajput83' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-violet-700 text-white hover:text-black cursor-pointer hover:bg-violet-300 sm:mx-2.5 sm:h-10 sm:w-10">
                                    <FaGithubAlt />
                                </a>
                                <a href='https://www.instagram.com/rajput_rahul8' className="mx-2.5 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-neutral-700 text-white hover:bg-neutral-400 hover:text-black cursor-pointer sm:mx-2.5 sm:h-10 sm:w-10">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}