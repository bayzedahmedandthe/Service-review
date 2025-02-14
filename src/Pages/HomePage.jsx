import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import ServiceFeatured from "../Components/ServiceFeatured";
import MeetOurTeam from "../Components/MeetOurTeam";
import ExtraSection from "../Components/ExtraSection";
import TrustUs from "../Components/TrustUs";



const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Review | home</title>
            </Helmet>
           <Header></Header>
           <TrustUs></TrustUs>
           <ServiceFeatured></ServiceFeatured>
           <MeetOurTeam></MeetOurTeam>
           <ExtraSection></ExtraSection>
        </div>
    );
};

export default HomePage;