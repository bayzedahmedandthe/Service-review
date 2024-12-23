import { motion } from "motion/react"
import img1 from "../assets/zeeconvert-com (6).jpg"
import img2 from "../assets/zeeconvert-com (7).jpg"
import img3 from "../assets/zeeconvert-com (8).jpg"


const Header = () => {
    return (
        <div>
            <div className="carousel w-[94%] mx-auto">
                <div id="item1" className="carousel-item lg:flex-row md:flex-row flex-col lg:p-0 md:p-0 p-6   w-full bg-gradient-to-r from-gray-50 to bg-white border-green-400 border rounded-lg ">
                    <div className="lg:pl-[200px] lg:pt-44 md:pl-[100px] md:pt-8 ">
                        <h2 className="lg:text-3xl font-semibold">Discover Excellence with Every <span className="text-[#00ca4c]">Service Review</span></h2>
                        <p className="pt-4">From local businesses to global services, explore detailed reviews and ratings to ensure the quality and reliability of every service you use. Trust our system to guide you toward the best!

                        </p>
                    </div>
                    <motion.img
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        src={img2}
                        className="md:w-56 md:h-56 lg:w-full lg:h-full bg-[#00ca4d2f]" />
                </div>
                <div id="item2" className="carousel-item lg:flex-row md:flex-row flex-col lg:p-0 md:p-0 p-6   w-full bg-gradient-to-r from-gray-50 to bg-white border-green-400 border rounded-lg ">
                    <div className="lg:pl-[200px] lg:pt-44 md:pl-[100px] md:pt-8">
                        <h2 className="lg:text-3xl font-semibold">Trusted Reviews, Empowering Your <span className="text-[#00ca4c]">Choices</span></h2>
                        <p className="pt-4"> Make informed decisions with authentic feedback from real customers. Our service review platform helps you find the best providers by highlighting genuine experiences and ratings.</p>
                    </div>
                    <motion.img
                        src={img1}
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="md:w-56 md:h-56 lg:w-full lg:h-full" />
                </div>
                <div id="item3" className="carousel-item lg:flex-row md:flex-row flex-col lg:p-0 md:p-0 p-6   w-full bg-gradient-to-r from-gray-50 to bg-white border-green-400 border rounded-lg ">
                    <div className="lg:pl-[200px] lg:pt-44 md:pl-[100px] md:pt-8">
                        <h2 className="lg:text-3xl font-semibold">Your Opinion Matters—Leave a Review <span className="text-[#00ca4c]">Today!</span></h2>
                        <p className="pt-4">  Share your experience, rate services, and help others make better choices. With our easy-to-use review platform, your feedback creates a community of transparency and trust. Let me know if you'd like variations or more options!

                        </p>
                    </div>
                    <motion.img
                        src={img3}
                        animate={{ y: [20, 40, 20] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="md:w-56 md:h-56 lg:w-full lg:h-full" />
                </div>
            </div>
            <div className="flex w-full justify-center mb-44 pt-12 gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Header;