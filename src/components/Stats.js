import "../index.css"
import { stats } from "../const/Home";
const Stats = () => {
    return ( 
        <section className=" bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="">
                <h2 className="  text-center text-white py-5 text-lg font-semibold md:text-2xl font-heading1 uppercase">Our Stats</h2>
                <div className=" sm:flex justify-around text-white md:py-5 px-5">
                {stats.map((stat) => (
                    <div key={stat.id} className=" p-5 m-5 flex-initial  shadow-2xl md:p-10 rounded-lg hover:-translate-y-1 hover:scale-110 hover: duration-300">
                        <img className="object-center py-5" src={stat.image} alt="" />
                        <h2 className="font-bold text-3xl">{stat.h2}</h2>
                        <p className="">{stat.p}</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
     );
}
 
export default Stats;