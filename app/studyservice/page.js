import Image from "next/image";
import Link from "next/link";
import Benner from "@/public/assets/studybanner.png";

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
                        <Image src={Benner} alt="Studying in Canada" priority/>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-2 mx-auto">

                </div>
            </section>
        </>
    );
}
