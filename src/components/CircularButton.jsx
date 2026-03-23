import React from "react";

const CircularButton = ({ className, children, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} flex items-center ${disabled ? "opacity-40" : ""}  justify-center rounded-full md:h-[65px] md:w-[100px] lg:w-[100px] lg:h-[80px] cursor-pointer`}
        >
            {children}
        </button>
    );
};

export default CircularButton;
