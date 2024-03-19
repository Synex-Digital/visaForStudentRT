import Image from "next/image";
import Link from "next/link";
import Benner from "@/public/assets/studybanner.png";
import Heading from "../components/Heading";

export default function StudyService() {
    return (
        <>
            <section className="pt-24 pb-28 bg-[#ffeccf]">
                <div className=" container mx-auto px-2 flex justify-between">
                    <div className="w-48%">
                        <p className="text-ptag">
                            Home {">"} Study Abroad {">"} Study in Canada
                        </p>
                        <h1 className="mb-5 mt-16 text-primary text-4xl font-medium">
                            Your dream of Studying in Canada is closer than you
                            think!
                        </h1>
                        <p className="font-medium text-lg  text-ptag mb-16">
                            Learn everything you need to know about studying in
                            Canada and get end to end expert guidance from us.
                        </p>
                        <Link
                            href={"#"}
                            className="bg-primary text-white text-lg font-medium px-7 py-3 rounded-[20px] "
                        >
                            Get Started For Free
                        </Link>
                    </div>
                    <div className="w-48%">
                        <Image src={Benner} alt="Studying in Canada" priority />
                    </div>
                </div>
            </section>
            <section className="pt-16 pb-20">
                <div className="container px-2 mx-auto flex justify-between">
                    <div className="w-[20%] shadow-lg p-5 rounded-[20px] h-fit">
                        <ul className="text-center">
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Study in Canada
                            </li>
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Courses & Universities
                            </li>
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Requirements
                            </li>
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Intakes
                            </li><br/>
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Cost{" "}
                            </li><br/>
                            <li className="hover:bg-primary inline-block rounded-[20px] py-2 px-5 text-primary hover:text-white">
                                Work
                            </li>
                        </ul>
                    </div>
                    <div className="w-[75%] shadow-lg p-12 rounded-[20px]">
                        <h2
                            className={`text-primary text-4xl font-medium mb-5`}
                        >
                            <span className="text-secondary">
                                Study in Canada
                            </span>{" "}
                            for Bangladeshi Students
                        </h2>

                        <p>
                            To study in Canada is an excellent opportunity for
                            students who desire a global education with
                            international accreditation. Canada is a dynamic and
                            diverse country renowned for its top-notch education
                            system. Situated in North America, Canada presents
                            international students with a unique chance to
                            explore a nation that embodies contemporary modern
                            culture while showcasing breathtaking scenery. The
                            country stands as the second-largest nation globally
                            with ten provinces and three territories. Each
                            exhibits distinct cultural identities and
                            captivating attractions. From its vibrant
                            metropolitan cities like Toronto, Montreal and
                            Vancouver to enchanting coastal towns and
                            picturesque mountain ranges, the country presents
                            diverse experiences for students. The country’s
                            unique education system is the primary reason for
                            international students to choose Canada. Its
                            universities and colleges are renowned for their
                            academic excellence, innovative research endeavors
                            and unwavering commitment to high-quality
                            education. Whether one seeks a degree in
                            engineering, arts, business, or any other field,
                            Canadian institutions offer an extensive range of
                            programs tailored to individual interests and career
                            aspirations. Furthermore, Canada has earned a
                            reputation for its welcoming, cordial and inclusive
                            society, establishing itself as a safe destination
                            for students coming from worldwide. Canadians
                            wholeheartedly embrace multiculturalism,
                            contributing to an environment encouraging cultural
                            exchange. As an international student, one will have
                            the invaluable opportunity to witness diverse
                            cultures and create friendships with individuals
                            hailing from various backgrounds. Learn more about
                            Canada, an unparalleled gateway to limitless
                            opportunities and an enriching educational
                            experience.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
