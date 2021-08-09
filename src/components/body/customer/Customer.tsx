import React from 'react';

interface IProps {
    name?: string
    place?: string
    imageUrl?: string
    uuid?: string
}

const Customer: React.FC<IProps> = ({name, place, imageUrl, uuid}) => {

    return (<div className="
    h-24
    sm:h-36
    pt-3
    pr-4
    pl-4
    sm:w-10/12
    lg:w-2/5
    lg:h-auto
    lg:p-0
    items-start
    border-solid shadow-2xl
    flex flex-row
    lg:flex-col md:flex-row sm:flex-row
    mx-auto
    relative
    z-50
    bg-gray-700
    ">
        <div className="flex flex-col w-9/12 h-24 align-start mt-3 ml-6 md:mt-6 md:ml-14 lg:order-last
            lg:align-center">
                <span className="text-xl md:text-2xl text-white lg:w-48">
               {name}
            </span>
            <span className="text-xs text-gray-300 md:text-2xl lg:text-base">
            {place}
            </span>
        </div>
        <div className="w-3/12 md:w-36 md:h-36 md:mt-3.5 lg:mt-16 space-0 mr-3 mt-1 md:mx-auto md:mt-0">
            <img
                className="lg:mx-auto  lg:w-36 lg:h-36
                 img-rounded border-2 border-yellow-600 w-16 h-16 md:w-24 md:h-24 outline"
                src={imageUrl}
                alt=""
            />
        </div>

    </div>)
}

export default Customer;
