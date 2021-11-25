import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

export function StarRating () {

    const [rating,setRating] = useState(null);
    const [hover,setHover] = useState(null);

    return (
        <div className="ratings">
          {[...Array(5)].map((star,i) => {
              const ratingValue = i + 1;
              return(
                  <label key={i}>
                      <input type="radio" 
                      name="rating" 
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)} />
                <FaStar className="star" 
                color={ratingValue <= (hover || rating) ? "#ffc107": "#afb6bb"} 
                size={15}
                onMouseEnter = {() => setHover(ratingValue)} 
                onMouseLeave = {() => setHover(null)} />
                </label>
              )
          })}
           
        </div>
    )
}
