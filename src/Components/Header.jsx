import { motion } from "motion/react"
import img1 from "../assets/zeeconvert-com__7_-removebg-preview.png"
import img2 from "../assets/Customer Survey-amico (1).png"
import img3 from "../assets/zeeconvert-com__6_-removebg-preview.png"


const Header = () => {
    return (
        <div className="">
            <div className="carousel">
                <div id="item1" className="text-white carousel-item lg:flex-row md:flex-row flex-col  p-2 md:p-6 w-full bg-gradient-to-b from-[#00032e] to-slate-600">
                    <div className=" flex justify-cenetr">
                        <div className="lg:pt-60 md:pt-40 pt-20  lg:mx-16">
                            <h2 className="md:text-3xl text-xl font-semibold">Discover Excellence with Every <span className="text-[#30eaff]">Service Review</span></h2>
                            <p className="pt-4">From local businesses to global services, explore detailed reviews and ratings to ensure the quality and reliability of every service you use. Trust our system to guide you toward the best!
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <motion.img
                            animate={{ y: [20, 40, 20] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            src={img2}
                            className="lg:w-[1100px] lg:h-[700px]" />
                    </div>
                </div>
                <div id="item2" className="text-white carousel-item lg:flex-row md:flex-row flex-col p-2 md:p-6 w-full bg-gradient-to-b from-[#00032e] to-slate-600">
                    <div className="flex justify-center">
                        <div className="lg:pt-60 md:pt-40 pt-20 lg:mx-16 ">
                            <h2 className="md:text-3xl text-xl font-semibold">Trusted Reviews, Empowering Your <span className="text-[#30eaff]">Choices</span></h2>
                            <p className="pt-4 "> Make informed decisions with authentic feedback from real customers. Our service review platform helps you find the best providers by highlighting genuine experiences and ratings.</p>
                        </div>
                    </div>
                    <motion.img
                        src={img1}
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="lg:w-[600px] lg:h-[700px]" />
                </div>
                <div id="item3" className=" text-white carousel-item lg:flex-row md:flex-row flex-col md:p-6 p-2 w-full  bg-gradient-to-b from-[#00032e] to-slate-600">
                    <div className="flex justify-center">
                        <div className="lg:pt-60 md:pt-40 pt-20 lg:mx-12">
                            <h2 className="md:text-3xl  text-xl font-semibold">Your Opinion Matters—Leave a Review <span className="text-[#30eaff]">Today!</span></h2>
                            <p className="pt-4">  Share your experience, rate services, and help others make better choices. With our easy-to-use review platform, your feedback creates a community of transparency and trust. Let me know if you'd like variations or more options!

                            </p>
                        </div>
                    </div>
                    <motion.img
                        src={img3}
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="lg:w-[600px] lg:h-[700px]" />
                </div>
            </div>
            <div className="flex w-full justify-center pt-12 gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div >
    );
};

export default Header;





