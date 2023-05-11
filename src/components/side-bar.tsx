import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <>
        
            <aside
                id="default-sidebar"
                className="fixed left-0   top-0 z-40 h-screen w-64 -translate-x-full bg-[#CBD5E1] transition-transform sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="flex h-full flex-col justify-between overflow-y-auto  px-12 py-16">
                    <ul className=" space-y-4 font-medium text-red-600">
                        <li className="">
                            <Link
                                href="#"
                                className="flex items-center rounded-lg  p-2 py-2.5 pl-4 text-[#1E293B]  hover:bg-[#1E293B] hover:text-white"
                            >
                                <div className="font-medium">Dashboard</div>
                            </Link>
                        </li>
                        <li className="">
                            <Link
                                href="#"
                                className="flex items-center rounded-lg p-2 py-2.5 pl-4 text-[#1E293B]  hover:bg-[#1E293B] hover:text-white"
                            >
                                <div className="font-medium">Requests</div>
                            </Link>
                        </li>
                    </ul>

                    <button
                        id="logout"
                        className="rounded-lg bg-[#EF4444] px-12 py-2.5 text-white hover:border hover:border-red-500 hover:bg-red-300 hover:text-red-500"
                    >
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
}
