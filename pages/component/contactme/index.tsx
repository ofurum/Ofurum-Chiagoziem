import React from "react";
import Image from "next/image"
import punch from "../../../public/images/punch.png";

const Contact = () => {

    return (
        <section className=" md:md-876:px-32 bg-header-matte-black text-white">
            <div className="border flex justify-between h-auto rounded-[20px] contact-me">
                <div className=" w-[50%] p-12">
                    <p className="text-[45px] font-semibold mb-10">Lets build something together</p>
                    <p className="text-[18px]">
                        Think I might be the right guy for your next adventure?
                        Take a minute, I’d love to hear about your project, just drop me a message below. I am currently AVAILABLE for any TypeScript, React, Nextjs, gatsby, React-Native gigs.
                    </p>
                </div>
                <div className="p-12">
                    <Image src={punch} alt="punch" width={180} height={180}/>

                    <div className="mb-auto">
                        <p>Send a message</p>
                    </div>
                </div>
            </div>

        </section>


    )
}

export default Contact