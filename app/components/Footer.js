import React from "react";
import Image from "next/image";
import logo from "@/public/assets/Logo.svg";
import { FaFacebookSquare, FaXTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-2">
                <div className="text-primary">
                    <Image src={logo} alt="Logo" priority />
                    <p className="text-[22px] mt-4 mb-3">Let’s get social</p>
                    <div className="flex text-4xl gap-x-3">
                        <span>
                            <FaFacebookSquare />
                        </span>
                        <span>
                            <FaXTwitter />
                        </span>
                        <span>
                            <FaLinkedin />
                        </span>
                        <span>
                            <FaFacebookSquare />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
