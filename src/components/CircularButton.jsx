import React from "react";

const CircularButton = ({ className, children }) => {
    return (
        <button
            className={`${className} flex items-center justify-center rounded-full w-13.75 h-13.75 md:h-17.5 md:w-17.5`}
        >
            {children}
        </button>
    );
};

export default CircularButton;
