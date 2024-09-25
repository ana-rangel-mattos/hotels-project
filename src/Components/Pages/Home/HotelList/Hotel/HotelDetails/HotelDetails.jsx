import {Link, useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {HotelContext} from "../../../../../../context/HotelContext.jsx";
import "./HotelDetails.css";
import {FaRegHeart, FaHeart} from "react-icons/fa6";
import {FiEdit3} from "react-icons/fi";
import {GoTrash} from "react-icons/go";
import DisplayRating from "../../../../../DisplayRating/DisplayRating.jsx";

function HotelDetails() {
  const { id } = useParams();
  const { data, handleToggleFavorite, handleDeleteHotel, handleFillForm } = useContext(HotelContext);
  const hotel = data.find(hotel => hotel.id == Number(id.slice(1)));
  const navigate = useNavigate();
  function redirectHotelList() {
    navigate('/hoteis')
  }

  return(
    <div className="hotel-details">
      <h3 className="hotel-name">Hotel {hotel.hotelName}</h3>
      <img src={hotel.mainImg} alt={hotel.mainImg} className="main-img"/>
      <h4 className="daily-price">Preço da Diária: <p>R${hotel.dailyPrice.toFixed(2)}</p></h4>
      <div className="hotel-rating">
        <h4 className="title">Classificação do Hotel:</h4>
        <DisplayRating rating={hotel.rating}/>
      </div>
      <div className="buttons">
        <div className="btn">
          {
            hotel.favorite ?
              <FaHeart className="filled-favorite favorite" onClick={() => handleToggleFavorite(hotel.id)}/> :
              <FaRegHeart className="empty-favorite favorite" onClick={() => handleToggleFavorite(hotel.id)}/>
          }
        </div>
        <div className="btn">
          <Link to="/cadastro">
            <FiEdit3 className="edit-btn" onClick={() => handleFillForm(hotel)}/>
          </Link>
        </div>
        <div className="btn">
          <GoTrash className="delete-btn" onClick={() => {
            handleDeleteHotel(hotel.id);
            redirectHotelList();
          }}/>
        </div>
      </div>
      <div className="location">
        <h4 className="title">Localização:</h4>
        <p className="city">Cidade: {hotel.city}</p>
        <p className="state">Estado: {hotel.countryState}</p>
      </div>
      <div className="hotel-description">
        <h4 className="title">Descrição do Hotel</h4>
        <p className="description">{hotel.description}</p>
      </div>

      <div className="optional-images">
        <h4 className="title">Outras Imagens</h4>
        <div className="container">
          <img className="opt-image" src={hotel.optionalImg1} alt={hotel.optionalImg1} />
          <img className="opt-image" src={hotel.optionalImg2} alt={hotel.optionalImg2} />
          <img className="opt-image" src={hotel.optionalImg3} alt={hotel.optionalImg3} />
          <img className="opt-image" src={hotel.optionalImg4} alt={hotel.optionalImg4} />
        </div>
      </div>
    </div>
  )
}

export default HotelDetails;
