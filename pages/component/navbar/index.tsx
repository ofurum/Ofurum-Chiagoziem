import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../../public/images/logo.png";


const Header = () => {
const hamburgerIcon  =  React.useRef<SVGSVGElement>(null);
const [menuIsOpen, setMenuIsOpen] = React.useState(false);

React.useEffect(() => {
    
}, [hamburgerIcon.current])

const router = useRouter();
  React.useEffect(() => {
    router.events.on("routeChangeStart", () => setMenuIsOpen(false));
  }, [router.events]);

  React.useEffect(() => {
    if (menuIsOpen) {
      document?.body.classList.add("h-full", "overflow-hidden");
    } else {
      document?.body.classList.remove("h-full", "overflow-hidden");
    }
  }, [menuIsOpen]);

const handleClick = () => {
    if(hamburgerIcon.current){
        hamburgerIcon.current && hamburgerIcon.current.classList.toggle("active")
        setMenuIsOpen((prevState) => !prevState)
    }
}

    return (
        <nav className="h-16.5 bg-header-matte-black text-white w-screen md-876:px-24">
            <div className="flex items-center ">
                <div className="mr-auto cursor-pointer">
                    <Image src={Logo} alt="chiagoziem logo" className="object-contain" width={100} height={72} />
                </div>
                <div className="">
                    <ul className={`${
            menuIsOpen ? "left-0 z-30 bg-header-matte-black h-screen": "-left-full"
          } top-16.6 absolute md-876:static bg-header-matte-black  md-876:h-auto w-screen md-876:w-auto px-7 md-876:px-0 transition-all duration-300  md-876:justify-between sm:flex-col sm:h-screen cursor-pointer`}>
                        <li className="mb-6.3 md-876:mb-0 leading-7 mr-10 md-876:inline-block xl:mr-16.6 whitespace-nowrap">Twitter</li>
                        <li className="mb-6.3 md-876:mb-0 leading-7 mr-10 md-876:inline-block xl:mr-16.6 whitespace-nowrap">Linkedin</li>
                        <li className="mb-6.3 md-876:mb-0 leading-7 mr-10 md-876:inline-block xl:mr-16.6 whitespace-nowrap">Contact</li>
                        <li className="mb-6.3 md-876:mb-0 leading-7 mr-10 md-876:inline-block xl:mr-16.6 whitespace-nowrap ">Resume</li>
                    </ul>
                </div>
                <div className="md-876:hidden md:block">
                    <svg className="ham hamRotate ham1" viewBox="0 0 100 100" width="80" ref={hamburgerIcon} onClick={handleClick}>
                        <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                            className="line middle"
                            d="m 30,50 h 40" />
                        <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Header;