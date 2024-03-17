"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

let arr = [
    {
        question: "How do I apply for a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
    {
        question: "How do I apply for a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
    {
        question: "How do I apply for a student visa?",
        answer: "A student visa is a legal authorization granted by a foreign country, such as USA, to allow the international students to study within the borders. It is a crucial document that permits entry for the purpose of education.",
    },
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="container mx-auto px-2 flex flex-col gap-y-5">
            {arr.map((item, index) => (
                <div>
                    <button
                        className=" bg-white py-4 px-8 w-full flex justify-between items-center rounded-[20px] text-primary shadow"
                        onClick={() => toggleAnswer(index)}
                    >
                        {item.question}
                        <span>
                            <FaChevronDown />
                        </span>
                    </button>
                    <div
                        className={`${
                            openIndex === index ? "block" : "hidden"
                        } bg-[#faf5f5] text-primary py-4 px-8 text-lg rounded-[20px] my-3`}
                    >
                        {item.answer}
                    </div>
                </div>
            ))}

            {/* <div className=" my-3">
                <button
                    className=" bg-white py-4 px-8 w-full flex justify-between items-center rounded-[20px] text-primary shadow"
                    onClick={() => setOpen(!open)}
                >
                    How do I apply for a student visa?{" "}
                    <span>
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } bg-[#faf5f5] text-primary py-4 px-8 text-lg rounded-[20px] my-3`}
                >
                    Answer 1
                </div>
            </div>
            <div>
                <button
                    className=" bg-white py-4 px-8 w-full flex justify-between items-center rounded-[20px] text-primary shadow"
                    onClick={() => setOpen(!open)}
                >
                    How do I apply for a student visa?{" "}
                    <span>
                        <FaChevronDown />
                    </span>
                </button>
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } bg-[#faf5f5] text-primary py-4 px-8 text-lg rounded-[20px] my-3`}
                >
                    Answer 1
                </div>
            </div> */}
        </div>
    );
};

export default FaqSection;
