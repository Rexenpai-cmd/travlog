import React from "react";

const SubHeading = ({ children, className }) => {
    return (
        <h1
            className={`${className} text-text-black font-semibold text-center lg:text-start text-[32px] leading-tight md:text-[44px]`}
        >
            {children}
        </h1>
    );
};

export default SubHeading;
