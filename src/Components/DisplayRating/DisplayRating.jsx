import "./DisplayRating.css";
import { FaStar } from "react-icons/fa"

function DisplayRating({ rating }) {
  return(
    <div className="star-container">
      {
        [...Array(5)].map((star, index) => {
          return <FaStar className={`star-display ${(index + 1) <= rating ? "star-display-yellow" : "star-display-gray"}`}/>
        })
      }
    </div>
  )
}

export default DisplayRating;