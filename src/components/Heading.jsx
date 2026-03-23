import React, { Children } from "react";

const Heading = ({ children, className }) => {
    return (
        <h6 className="uppercase text-base font-semibold text-[16px] md:text-[21px] text-secondary tracking-widest">
            {children}
        </h6>
    );
};

export default Heading;
