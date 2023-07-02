import "../index.css"
import { Hero } from "../const/About";
import { Link } from "react-router-dom";
import { values } from "../const/About";
import { reasons } from "../const/About";
import Welcome from "../components/Welcome";

const About = () => {
    return ( 
        <section>
            <div className="container">
                <div>
                    <Welcome
                        imageUrl={Hero.images}
                        text={Hero.text.h2}
                    />
                </div>
                <div className="py-5">
                    <h2 className="text-center text-lg font-semibold md:text-2xl font-heading1"> {Hero.para1}</h2>
                    <p className="text-justify font-heading3 max-w-[90vw] lg:max-w-[70vw] mx-auto leading-6 py-4  lg:leading-8 tracking-widest text-gray-600"> {Hero.para2}</p>
                    <div className="text-center">
                        <button className="bg-blue-700 text-white py-2 px-5 shadow-xl rounded-lg  mr-16 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 outline-none text-center"> <Link to='/donate'>DONATE</Link></button>
                    </div>
                </div>
                <div className=" bg-gradient-to-l from-cyan-400 to-blue-400 text-white">
                    <div className="p-4">
                        <h2 className="text-2xl text-center font-semibold  font-head-2 uppercase">Our Values</h2>
                        {values.map((value) => (
                            <div key={value.id}>
                                <h5 class=" font-sans sm:text-3xl sm:text-center md:text-center">{value.title} </h5>
                                <div class="flex justify-center">
                                    <img className="rounded-xl object-center p-5" src={value.image} alt=""/>
                                </div>
                                <ul className="sm:flex sm:justify-around py-5">
                                    {value.outlines.map((outline) => (
                                        <li className="flex-auto py-2 sm:py-0  font-semibold sm:text-2xl md:text-3xl" key={outline.id}>{outline.name}</li>
                                    ))}
                                </ul>    
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div className=" text-justify max-w-[90vw] lg:max-w-[70vw] mx-auto leading-6 py-4  lg:leading-8 tracking-widest text-gray-600">
                    {
                        reasons.map((reason) => (
                            <div>
                                <h2 className="text-center text-lg  font-semibold md:text-3xl font-heading1">{reason.title}</h2>
                                {
                                    reason.outline.map((outline) =>(
                                        <div className="py-3 font-heading3">
                                            <div className=" text-gray-800 text-lg font-semibold"><span>{outline.id}</span><h5 className="">{outline.h5}</h5></div>
                                            <p className=" ">{outline.p}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default About;