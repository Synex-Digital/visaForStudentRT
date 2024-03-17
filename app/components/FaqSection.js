import React, { useState } from "react";

const FaqSection = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="faq-container">
            <div className="faq-item">
                <button
                    className="faq-question bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => setOpen(!open)}
                >
                    Question 1
                </button>
                <div
                    className={`faq-answer ${
                        open ? "block" : "hidden"
                    } bg-gray-100 text-gray-800 p-4 rounded mt-2`}
                >
                    Answer 1
                </div>
            </div>
            
        </div>
    );
};

export default FaqSection;
