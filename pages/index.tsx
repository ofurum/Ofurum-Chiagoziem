import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import locatinon from "../public/icons/location.svg";
import pace from "../public/images/pace-africa.png";
import offerPic from "../public/images/offer.png";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Ofurum Chiagoziem</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="">
             <span className="flex items-center">
               <div className="mr-6">
               <Image src={locatinon} alt="location"/>
               </div>
               <div className="font-GTWalsheim-Regular">
                  <p>Lagos, Nigeria {"&"} Remote</p>
               </div>
             </span>
             <div className="font-[500] text-[80px] w-[70%]">
                 <p>
                 Hello, <br/>
                 I’m Ofurum Chiagoziem
                 </p>
             </div>
             <div>
               <p className="text-[20px] w-[60%]">
               I’m a frontend engineer with a few years of commercial experience, open to new opportunities and interesting projects.
               </p>
             </div>
             <div className="py-10">
               <button className="h-[67px] w-[223px] border-[white] border-2 rounded-md mr-10 cursor-pointer">
                  About me
               </button>
               <button className="h-[67px] w-[223px] bg-[white] text-[black] rounded-md cursor-pointer">
                  Some of my works
               </button>
             </div>
        </section>
        <section className="featured-projects">
          <div>
             <p className="text-[10vw] text-zinc-800">Featured Projects</p>
             <p className="text-[10vw] featured-2">Featured Projects</p>
             <p>01/04</p>
          </div>
         <div className="project-details">
           
            <ul className="flex w-[400%] flex-nowrap py-10 ">
              
               <li className="flex items-center">
                 <div className="mr-10">
                   <Image src={pace} className="object-contain" alt="pace" height={300} width={446} />
                 </div>
                 <div className="w-[45%]">
                    <p className="mb-5 text-[24px]">Pace</p>
                    <p>Pace is a recruitment platform where job seekers get first hand information about the latest available jobs in their region. This was built using react, tailwind and typeScript.</p>
                 </div>

               </li>
               <li className="flex items-center">
                 <div className="mr-10">
                   <Image src={pace} className="object-contain" alt="pace" height={300} width={446} />
                 </div>
                 <div className="w-[45%]">
                    <p className="mb-5 text-[24px]">Pace</p>
                    <p>Pace is a recruitment platform where job seekers get first hand information about the latest available jobs in their region. This was built using react, tailwind and typeScript.</p>
                 </div>

               </li>
               <li className="flex items-center">
                 <div className="mr-10">
                   <Image src={pace} className="object-contain" alt="pace" height={300} width={446} />
                 </div>
                 <div className="w-[45%]">
                    <p className="mb-5 text-[24px]">Pace</p>
                    <p>Pace is a recruitment platform where job seekers get first hand information about the latest available jobs in their region. This was built using react, tailwind and typeScript.</p>
                 </div>

               </li>
               <li className="flex items-center">
                 <div className="mr-10">
                   <Image src={pace} className="object-contain" alt="pace" height={300} width={446} />
                 </div>
                 <div className="w-[45%]">
                    <p className="mb-5 text-[24px]">Pace</p>
                    <p>Pace is a recruitment platform where job seekers get first hand information about the latest available jobs in their region. This was built using react, tailwind and typeScript.</p>
                 </div>

               </li>
            </ul>
         </div>
      </section>
      <section className="">
        <div className="flex items-center mb-[50px]">
          <Image src={offerPic} alt="offer" className="object-contain" width={100} height={90} />
          <p className="text-[5vw] ">Here{"'s"} what I have to offer</p>
        </div>
        
        <div className="flex justify-between">
           <div className=" md:h-auto md:w-[40%] rounded-lg p-10 shadow-box">
               <p className="font-semibold text-[2vw] mb-[40px] ">Experience you will love</p>
               <p>This is what I love to do, as a UI Engineer I am passionate about using the necessary tools as a method for improving connections between people and the products they use.</p>
            </div>
             <div className="md:h-auto md:w-[40%] rounded-lg p-10 shadow-box">
             <p className="font-semibold text-[2vw] mb-[40px]">A healthy freelance relationship</p>
               <p>No dramas or difficult relationships. I'm here to connect and understand people, make your life easier, solve problems and help you grow your business.</p>
             </div>

        </div>
      </section>
      </main>
    </div>
  )
}

export default Home
