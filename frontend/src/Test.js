import React from 'react';
import { useState } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";

function Test() {
    const [open, setOpen] = useState(false);

    return (
        <div className='h-screen bg-gray-200 flex justify-center pt-1'>
            <div className='relative'>
                <IoPersonCircleSharp size={50} onClick={() => setOpen(!open)} />
                {
                    open && (
                        <div className='bg-white p-4 w-52 shadow-lg absolute -left-14 top-14'>
                            <ul className="p-0 m-0 list-none">
                                <li
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                                >
                                    Profile
                                </li>
                                <li
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                                >
                                    Your apps
                                </li>
                                <li
                                    onClick={() => setOpen(false)}
                                    className="p-2 text-lg cursor-pointer rounded hover:bg-blue-100"
                                >
                                    Settings
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Test;
