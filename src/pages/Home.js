import "../index.css"
import { Hero } from "../const/Home";
import Stats from "../components/Stats";
import { sponsors } from "../const/Home";
import Welcome from "../components/Welcome";
import Example from "../components/Testimonials";
const Home = () => {
    return ( 
        <section>
            <div className=" ">
                <div>
                    <Welcome
                        imageUrl={Hero.images}
                        text={Hero.text.h2}
                        text2={Hero.text.p}
                    />
                </div>
                <div className="py-5">
                    <h2 className=" text-center text-lg font-semibold md:text-2xl font-heading1">{Hero.para1}</h2>
                    <p className="text-justify max-w-[70vw] mx-auto leading-6 py-4  lg:leading-8 tracking-widest text-gray-600">{Hero.para2}</p>
                </div>
                <div>
                    <Stats/>
                </div>
                <div>
                    <Example/>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 md:py-7 sm:py-5 py-3">
                    <h2 className="text-center font-bold text-white transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover-underline-animation-3 p-2.5 m-2.5 font-head-2">OUR ORGANISATION MAJOR SPONSORS</h2>
                    <div className="block md:flex md:justify-between md:align-middle p-5">
                        {
                            sponsors.map((sponsor) => (
                                <div className="block w-full p-4 m-2 md:m-4 md:w-1/5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={sponsor.id}>
                                    <h5 className="mb-2 text-2xl font-bold font-head-5 tracking-tight text-gray-900 dark:text-white">{sponsor.name}</h5>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <Welcome
                        imageUrl={Hero.images2}
                        text={Hero.text.h5}  
                    />
                </div>
            </div>
        </section>
     );
}
 
export default Home;