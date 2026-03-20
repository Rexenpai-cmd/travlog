import React from "react";

const Image = ({ className, src }) => {
    return (
        <div>
            <img src={src} alt="" />
        </div>
    );
};

export default Image;
