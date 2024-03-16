import React from "react";

const Heading = ({ firstword, title, subtitle }) => {
    return (
        <div>
            <h3 className="text-primary text-4xl font-medium text-center">
                <span className="text-secondary">{firstword}</span> {title}
            </h3>
            <p className="text-lg text-ptag text-center mt-6">{subtitle}</p>
        </div>
    );
};

export default Heading;
