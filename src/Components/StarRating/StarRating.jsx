import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating({rating, onRatingChange }) {
  return(
    <div className="star-container">
      {
        [...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label>
              <input
                value={ratingValue}
                type="radio"
                name="rating"
                onClick={() => onRatingChange(ratingValue)}
                />
              <FaStar className={`star ${ratingValue <= rating ? "star-yellow" : "star-gray"}`}/>
            </label>
          );
        })
      }
    </div>
  );
}

export default StarRating;