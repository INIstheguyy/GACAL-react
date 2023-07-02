import styles from "../styles";
import { Link } from "react-router-dom";
import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import logo from "../assets/images/GACAL logo4.png .png"
import '../index.css'

const Footer = () => {
    return ( 
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-gray-800 p-6`}>
            <div className="container">
                <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-[1] flex flex-col justify-start mr-10">
                    <img
                    src={logo}
                    alt="hoobank"
                    className="w-[266px] h-[72.14px] object-contain"
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                        GET A CHILD A LIFE TODAY!
                    </p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-evenly text-white font-heading3 flex-wrap md:mt-0 mt-10">
                <div>
                        
                        <ul>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/'>Home</Link></li>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/about'>About Us</Link></li>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/contact'>Contact</Link></li>
                        </ul>
                </div>
                <div>
                        
                        <ul>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/project'>Projects</Link></li>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/donate'>Donate</Link></li>
                            <li className=" hover:text-[#A5C9CA] font-light py-1 "><Link to='/'>Community</Link></li>
                        </ul>
                </div>
                </div>
                </div>
                <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45] '>
                <div>
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                    ©Copyright 2022.All Rights Reserved.</p>
                </div>
                <div className='flex flex-row md:mt-0 mt-6'>
                <img src={facebook} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                <img src={twitter} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                <img src={instagram} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-6" />
                <img src={pinterest} alt="" className="w-[21px] h-[21px] object-contain cursor-pointer mr-0" />
                </div>
                </div>
            </div>
    </section>
     );
}
 
export default Footer;