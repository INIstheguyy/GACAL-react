import "../index.css"
import { Hero, contactUs } from "../const/Contact";
import ContactForm from "../components/ComtatForm";
import Welcome from "../components/Welcome";
const Contact = () => {
    return ( 
        <section>
            <div className="container">
                <div className="">
                    <Welcome
                    imageUrl={Hero.image}
                    text={Hero.text.h2}
                />
                </div>
                <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto ">
                    <div className="py-4">
                        <h2 className="text-center text-lg font-semibold lg:text-3xl font-heading1 py-3">{contactUs.h2}</h2>
                        <h5 className="font-semibold lg:text-2xl font-heading1 py-3">{contactUs.h5}</h5>
                        <div className="">
                            <p className="py-2 text-justify font-heading3 text-gray-600 leading-5 tracking-widest ">{contactUs.p1}</p>
                            <p className="py-2 text-justify font-heading3 text-gray-600 leading-5 tracking-widest ">{contactUs.p2}</p>
                        </div>
                    </div>
                    <div>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;