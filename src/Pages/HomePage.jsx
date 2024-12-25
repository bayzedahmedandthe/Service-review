import { Helmet } from "react-helmet-async";
import Header from "../Components/Header";
import ServiceFeatured from "../Components/ServiceFeatured";



const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Review | home</title>
            </Helmet>
           <Header></Header>
           <ServiceFeatured></ServiceFeatured>
        </div>
    );
};

export default HomePage;