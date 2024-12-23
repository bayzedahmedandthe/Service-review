import { useState } from "react";


const rating = () => {
    const [value, setValue] = useState(0)
    return (
        <div className="flex items-center gap-2">
            {[...Array(5)].map((_, index) =>{
                return <span className={`text-3xl cursor-pointer ${index < value ? "text-orange-400" : ""}`} key={index}
                onMouseOver={() => {
                    setValue(index + 1)
                }}
                onMouseOut={() => {
                    
                }}
                onClick={() => {
                    setValue(index + 1)
                }}
                >&#9733;</span>
            })}
            <div className="text-2xl">{value}</div>
        </div>
    );
};

export default rating;