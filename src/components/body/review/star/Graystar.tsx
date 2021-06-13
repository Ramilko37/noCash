import * as React from "react"

function Graystar(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={42}
            height={40}
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M21 0l4.94 15.202h15.983l-12.931 9.395 4.94 15.201L21 30.403 8.069 39.798l4.939-15.201L.077 15.202H16.06L21 0z"
                fill="#313D4D"
            />
        </svg>
    )
}

export default Graystar
