import "./Hotel.css";
import { Link } from "react-router-dom";
import { GoTrash } from "react-icons/go";
import { FiEdit3 } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

import { HotelContext } from "../../../../../context/HotelContext.jsx";
import DisplayRating from "../../../../DisplayRating/DisplayRating.jsx";
function Hotel({ hotel }) {
  const { handleDeleteHotel, handleFillForm, handleToggleFavorite } = useContext(HotelContext);

  return(
    <li className="hotel">
      <img src={hotel.mainImg} alt="Imagem do Hotel" className="image"/>
      <h3 className="hotel-name">{hotel.hotelName}</h3>
      <p>Classificação do Hotel:</p>
      <DisplayRating rating={hotel.rating}/>
      <div className="location">
        <p className="state">Cidade: {hotel.countryState}</p>
        <p className="city">Estado: {hotel.city}</p>
      </div>
      <p className="price">Diária: R$ {hotel.dailyPrice.toFixed(2)}</p>
      <div className="buttons">
        <div className="btn">
          {
            hotel.favorite ? <FaHeart className="filled-favorite favorite" onClick={() => handleToggleFavorite(hotel.id)}/> : <FaRegHeart className="empty-favorite favorite" onClick={() => handleToggleFavorite(hotel.id)}/>
          }
        </div>
        <div className="btn">
          <Link to="/cadastro">
            <FiEdit3 className="edit-btn" onClick={() => handleFillForm(hotel)}/>
          </Link>
        </div>
        <div className="btn">
          <Link to={`/hoteis/:${hotel.id}`} >
            <IoMdOpen className="goto-btn"/>
          </Link>
        </div>
        <div className="btn">
          <GoTrash className="delete-btn" onClick={() => handleDeleteHotel(hotel.id)}/>
        </div>
      </div>
    </li>
  );
}

export default Hotel;