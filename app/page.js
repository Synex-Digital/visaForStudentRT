import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";
import banner from "@/public/assets/banner.webp";
import Link from "next/link";
import Heading from "./components/Heading";
import WomanCh from "@/public/assets/Womanchecking.png";
import ReactSlick from "./components/ReactSlick";

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
                    <div className="flex justify-between mt-28">
                        <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
                            <Image
                                priority
                                src={WomanCh}
                                alt="Student Accommodation"
                                className="w-full"
                            />
                            <h4 className="pl-2 text-white">
                                Student Accommodation
                            </h4>
                            <Link
                                href={"#"}
                                className="text-xs pl-2 text-[#acb5b0]"
                            >
                                Know more
                            </Link>
                        </div>
                        <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
                            <Image
                                priority
                                src={WomanCh}
                                alt="Student Accommodation"
                                className="w-full"
                            />
                            <h4 className="pl-2 text-white">
                                Student Accommodation
                            </h4>
                            <Link
                                href={"#"}
                                className="text-xs pl-2 text-[#acb5b0]"
                            >
                                Know more
                            </Link>
                        </div>
                        <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
                            <Image
                                priority
                                src={WomanCh}
                                alt="Student Accommodation"
                                className="w-full"
                            />
                            <h4 className="pl-2 text-white">
                                Student Accommodation
                            </h4>
                            <Link
                                href={"#"}
                                className="text-xs pl-2 text-[#acb5b0]"
                            >
                                Know more
                            </Link>
                        </div>
                        <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
                            <Image
                                priority
                                src={WomanCh}
                                alt="Student Accommodation"
                                className="w-full"
                            />
                            <h4 className="pl-2 text-white">
                                Student Accommodation
                            </h4>
                            <Link
                                href={"#"}
                                className="text-xs pl-2 text-[#acb5b0]"
                            >
                                Know more
                            </Link>
                        </div>
                        <div className="bg-primary rounded-[20px] w-[18%] px-3 py-4">
                            <Image
                                priority
                                src={WomanCh}
                                alt="Student Accommodation"
                                className="w-full"
                            />
                            <h4 className="pl-2 text-white">
                                Student Accommodation
                            </h4>
                            <Link
                                href={"#"}
                                className="text-xs pl-2 text-[#acb5b0]"
                            >
                                Know more
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20 pb-14">
                <Heading
                    firstword={"STUDY"}
                    title={"ABROAD WITH VISA"}
                    subtitle={
                        "Explore the best study destination in the world! Learn all about the countries top universities, scholarships, cost of living, post study work rights and more"
                    }
                />
                <div className="flex justify-between">
                    <ReactSlick className={" w-full h-full"}>
                        <div>One</div>
                        <div>One</div>
                        <div>One</div>
                        <div>One</div>
                        <div>One</div>
                        <div>One</div>
                    </ReactSlick>
                </div>
                <div className="flex justify-center mt-14">
                    <Link
                        href={"#"}
                        className="bg-primary text-white text-lg font-medium px-7 py-3 rounded-xl flex items-center gap-x-2"
                    >
                        Explore More{" "}
                        <span>
                            <BsArrowUpRight />
                        </span>
                    </Link>
                </div>
            </section>
        </main>
    );
}
