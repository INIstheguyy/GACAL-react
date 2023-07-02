import "../index.css"
import { Hero, Projects } from "../const/Project";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
const Project = () => {
    return ( 
        <section>
            <div className="container">
                <div className="">
                    <Welcome
                    imageUrl={Hero.image}
                    text={Hero.text.h2}
                    />
                </div>
                <div className="py-4">
                    <p className="text-justify font-heading3 max-w-[90vw] lg:max-w-[70vw] mx-auto leading-6 py-4  lg:leading-8 tracking-widest text-gray-600">{Hero.para1}</p>
                </div>
                <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto">
                    {Projects.map((Project) => (
                        <div className="">
                            <h2 className="font-heading1 sm:text-3xl sm:text-center md:text-center py-3"> {Project.title} </h2>
                            <div className="">
                                {Project.outline.map((outline) => (
                                    <div className="shadow-lg p-4 my-4 rounded-lg text-gray-600 font-heading3">
                                        <p className="" key={outline.id}>{outline.p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="py-5">
                    <h5 class=" py-2 font-bold text-gray-700 italic font-heading2 text-2xl leading-9 tracking-widest">You're welcome to send your donations:</h5>
                        <div className="">
                            <button className="bg-blue-700 text-white py-2 px-5 shadow-xl rounded-lg  mr-16 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 outline-none text-center"> <Link to='/donate'>DONATE</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Project;