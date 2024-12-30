import img1 from "../assets/reputation-management-user-feedback-customer-loyalty-client-satisfaction-meter-positive-review-company-trust-five-star-quality-evaluation-system_335657-2691.avif"
import img2 from "../assets/document-marketing-strategy-business-concept_53876-132234.avif"
import img3 from "../assets/review-stars-5-1-flat_78370-2527.jpg"

const ExtraSection = () => {
    return (
        <div className="pt-6">
              <h2 className="text-2xl font-semibold pb-6">
                That's why you should leave a review on our page
            </h2>
            <div className="pb-20 grid lg:grid-cols-3 md:grid-cols-2 gap-12 ">
              
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={img1}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold py-6 text-white">Your voice matters! Help others </h2>
                        <p className="text-white"> make informed decisions by sharing your honest reviews. Whether it’s a service that exceeded your expectations or one that fell short, your insights can guide countless users. Start making a difference today by leaving your review.</p>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={img2}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold py-6 text-white">Become a Trusted Reviewer</h2>
                        <p className="text-white">Gain recognition for your valuable opinions! Earn badges and perks by contributing high-quality, helpful reviews. Join a community of trusted reviewers who make a real impact. Your expertise deserves to be showcased—start reviewing now!</p>
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                    <figure>
                        <img
                            src={img3}
                            alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-semibold py-6 text-white">Quick and Easy Review Process</h2>
                        <p className="text-white">No lengthy forms, no hassle—just a few clicks to share your thoughts! Our intuitive platform ensures you can submit a review in minutes. Help others and get recognized without sacrificing your time. Review now and see how easy it is!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;