import React from 'react';

const Customer: React.FC = () =>
    <div className="
    lg:h-full lg:w-1/4
    md:h-1/4 md:w-full
    sm:h-1/4 sm:w-full
    border-solid shadow-2xl rounded-lg
    flex items-center justify-center lg:flex-col md:flex-row sm:flex-row
    space-y-6
    space-x-6
    ">
        <img
            className="border-2 rounded-full border-yellow-500 w-32 h-32"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
        />
        <div className="flex flex-col space-y-6 space-x-6">
            <span className="text-2xl text-white">
                Nicola Bilinac
            </span>
            <span className="text-lg text-gray-300">
            Starbucks
            </span>
        </div>

    </div>

export default Customer
