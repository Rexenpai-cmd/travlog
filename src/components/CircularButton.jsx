import React from "react";

const CircularButton = ({ className, children, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${className} flex items-center ${disabled ? "opacity-40" : ""}  justify-center rounded-full md:h-16.25 md:w-25 lg:w-25 lg:h-20 cursor-pointer`}
        >
            {children}
        </button>
    );
};

export default CircularButton;
