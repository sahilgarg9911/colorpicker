import React from "react";
import '../styles/Stars.css';
const Stars = ({stars}) => {
    // console.log(stars)
    // const ratingstar =  Array.from({length : 5}, (elem, index) => {

    //     let number = index+0.5;

    //     return <span key={index}/>
    //     {
    //         stars >= index + 1 ? (<i class="fa-solid fa-star"></i>) : stars >= number ? (<i class="fa-solid fa-star-half"></i>)
    //     }
    // })

    return (
        <>
        {/* {ratingstar} */}
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>

        </>
    )
};

export default Stars;