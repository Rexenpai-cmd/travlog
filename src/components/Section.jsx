import React from "react";

const Section = ({ children }) => {
    return (
        <div className="flex items-center h-full w-full justify-center px-5 md:px[40px] lg:px-20">
            {children}
        </div>
    );
};

export default Section;
