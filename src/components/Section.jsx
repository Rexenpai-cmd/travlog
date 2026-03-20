import React from "react";

const Section = ({ children, className }) => {
    return (
        <div
            className={`flex items-center h-full w-full justify-center ${className}`}
        >
            {children}
        </div>
    );
};

export default Section;
