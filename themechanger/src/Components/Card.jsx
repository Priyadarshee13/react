import React from 'react'
import profileImg from '../assets/profile.jpg'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
                className="p-8 rounded-t-lg w-full object-cover h-64"
                src={profileImg}
                alt="Priyadarshee Gorai"
            />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Priyadarshee Gorai
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    20 years · Male
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    KIIT University · Batch 28
                </p>
                <div className="flex items-center gap-2 mt-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
                        CSE
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                        Engineering
                    </span>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Section CSE-50</span>
                    <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                        Connect
                    </a>
                </div>
            </div>
        </div>
    )
}