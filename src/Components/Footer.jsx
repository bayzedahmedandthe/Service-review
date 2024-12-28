import { IoLogoFacebook } from "react-icons/io";
import logo1 from "../assets/icons8-rating-100.png"
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-100">
            <aside className="lg:ml-60 md:ml-32">
                <img src={logo1} alt="" />
                <p className="font-semibold text-lg">
                    Services Reviews Industries Ltd.
                </p>
                <p> Our service review platform helps you find the best providers <br /> by highlighting genuine experiences and ratings.</p>
            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="flex items-center gap-2">
                    <a className="text-4xl" href="https://www.facebook.com/home.php"><IoLogoFacebook></IoLogoFacebook></a>
                    <a className="text-4xl" href="https://www.google.com/"><FcGoogle></FcGoogle></a>
                    <a className="text-4xl" href="https://x.com/?lang=en&mx=2"><FaTwitter></FaTwitter></a>
                    <a className="text-4xl" href="https://www.linkedin.com/"><FaLinkedin></FaLinkedin></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;