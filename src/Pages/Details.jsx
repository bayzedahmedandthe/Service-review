import { useLoaderData } from "react-router-dom";

const Details = () => {
    const detailsData = useLoaderData();
    const { serviceImage, serviceTitle, description, category, price, _id } = detailsData;

    return (
        <div>
            {_id}
        </div>
    );
};

export default Details;