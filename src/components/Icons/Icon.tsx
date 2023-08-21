import React from "react";
import {IconColorEnum} from "../../typings/icon";

interface IconProps {
    color: IconColorEnum
}

const Icon: React.FC<IconProps> = ({ color = IconColorEnum.dark}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width='1em'
            height='1em'
            fill="none"
            viewBox="0 0 70 70"
        >
            <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6"
                d="M51 19v32M35 31v20m-16-8v8m-8 16h48a8 8 0 008-8V11a8 8 0 00-8-8H11a8 8 0 00-8 8v48a8 8 0 008 8z"
            ></path>
        </svg>
    );
}

export default Icon;
