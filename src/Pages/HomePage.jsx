import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import ServiceFeatured from "../Components/ServiceFeatured";
import MeetOurTeam from "../Components/MeetOurTeam";



const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Review | home</title>
            </Helmet>
           <Header></Header>
           <ServiceFeatured></ServiceFeatured>
           <MeetOurTeam></MeetOurTeam>
        </div>
    );
};

export default HomePage;