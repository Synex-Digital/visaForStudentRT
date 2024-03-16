import Image from "next/image";
import React from "react";
import logo from "@/public/assets/Logo.svg";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    return (
        <header>
            <nav className="shadow-md w-full fixed z-50 bg-white">
                <div className="container mx-auto px-2 flex justify-between items-center py-3">
                    <div className="w-1/5">
                        <Image priority src={logo} alt="Logo" />
                    </div>
                    <div className="flex justify-between w-3/5 px-7">
                        <Link
                            href={"#"}
                            className="flex items-center gap-x-1.5"
                        >
                            Study Abroad{" "}
                            <span>
                                <FaAngleDown className="text-xs" />
                            </span>
                        </Link>
                        <Link
                            className="flex items-center gap-x-1.5"
                            href={"#"}
                        >
                            Study Service{" "}
                            <span>
                                <FaAngleDown className="text-xs" />
                            </span>
                        </Link>
                        <Link
                            className="flex items-center gap-x-1.5"
                            href={"#"}
                        >
                            Scholarship{" "}
                            <span>
                                <FaAngleDown className="text-xs" />
                            </span>
                        </Link>
                        <Link href={"#"}>Events</Link>
                        <Link href={"#"}>Appointment</Link>
                        <Link href={"#"}>About</Link>
                    </div>
                    <div className="flex w-1/5 gap-x-2 justify-end">
                        <span className=" bg-[#EAECEB] flex items-center justify-center rounded-full w-12 h-12">
                            <IoCallOutline className="text-xl text-primary" />
                        </span>
                        <div>
                            <span className="block text-[#ABADAC]">
                                Hotline 24/7
                            </span>
                            <span className="block">+8801712345678</span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
