import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import banner from "@/public/assets/banner.webp";
import Link from "next/link";
import Heading from "./components/Heading";
export default function Home() {
    return (
        <main>
            <section>
                <div className="container mx-auto px-2 flex justify-between">
                    <div className="w-48% flex flex-col justify-center">
                        <h2 className="text-sm py-3 px-7 bg-[#EAECEB] flex items-center gap-x-2.5 rounded-full w-fit">
                            <span>
                                <FaGraduationCap />
                            </span>
                            Scholarships For Bangladeshi Students
                        </h2>
                        <h1 className="text-primary mt-10 mb-7 font-medium text-4xl">
                            Elevate Student Experience <br /> With Visa
                            Consulting
                        </h1>
                        <h2 className="text-ptag text-lg">
                            Maximize your student experience with Visa
                            Consulting. Seamlessly navigate the visa process,
                            unlocking the full potential of your academic
                            journey.
                        </h2>
                        <div className="flex gap-x-7 mt-20">
                            <Link
                                href={"#"}
                                className="bg-primary text-white text-lg font-medium px-7 py-3 rounded-xl flex items-center gap-x-2"
                            >
                                Book a free consultation{" "}
                                <span>
                                    <BsArrowUpRight />
                                </span>
                            </Link>
                            <Link
                                href={"#"}
                                className="bg-secondary text-lg font-medium px-7 py-3 rounded-xl flex items-center gap-x-2"
                            >
                                Events
                                <span>
                                    <BsArrowUpRight />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-48%">
                        <Image src={banner} alt="Banner" priority />
                    </div>
                </div>
            </section>
            <section className="bg-[#faf5f5] pt-14 pb-20">
                <div className="container mx-auto px-2">
                    <Heading
                        firstword={"Our"}
                        title={"Programs"}
                        subtitle={
                            "Unlocking the full potential of your academic journey"
                        }
                    />
                </div>
            </section>
        </main>
    );
}
