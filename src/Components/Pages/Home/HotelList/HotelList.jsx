import {useContext, useState} from "react";
import {HotelContext} from "../../../../context/HotelContext.jsx";
import Hotel from "./Hotel/Hotel.jsx";
import "./HotelList.css";

function HotelList() {
  const [sortBy, setSortBy] = useState("input");
  const [search, setSeach] = useState("");
  const { data } = useContext(HotelContext);
  const dataLength = data.length;

  let sortedData;

  if (sortBy === "input") {
    sortedData = data;
  }

  if (sortBy === "name_a-z") {
    sortedData = data.slice().sort((a, b) => a.hotelName.localeCompare(b.hotelName));
  }

  if (sortBy === "name_z-a") {
    sortedData = data.slice().sort((a, b) => b.hotelName.localeCompare(a.hotelName));
  }

  if (sortBy === "rating-increasing") {
    sortedData = data.sort((a, b) => a.rating - b.rating);
  }

  if (sortBy === "rating-decreasing") {
    sortedData = data.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "price-increasing") {
    sortedData = data.sort((a, b) => a.dailyPrice - b.dailyPrice);
  }

  if (sortBy === "price-decreasing") {
    sortedData = data.sort((a, b) => b.dailyPrice - a.dailyPrice);
  }

  if (sortBy === "favorite") {
    sortedData = data.filter(data => data.favorite)
  }

  const finalSortedData = sortedData.filter((hotel) => hotel.hotelName.toLowerCase().includes(search));

  return(
    <div className="hotels">
      <h2>Lista de Hotéis</h2>
      <div className="search-bar">
        <input type="text" placeholder="Pesquise..." value={search} onChange={(e) => setSeach(e.target.value)}/>
      </div>
      <div className="filters">
        <label htmlFor="filterBy" className="title">Filtro:</label>
        <select name="filterBy" id="filterBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Filtrar por ordem de entrada</option>
          <option value="name_a-z">Filtrar por nome A-Z</option>
          <option value="name_z-a">Filtrar por nome Z-A</option>
          <option value="rating-increasing">Filtrar por classificação crescente</option>
          <option value="rating-decreasing">Filtrar por classificação decrescente</option>
          <option value="price-increasing">Filtrar por preço crescente</option>
          <option value="price-decreasing">Filtrar por preço decrescente</option>
          <option value="favorite">Favoritos</option>
        </select>
      </div>
      {
        dataLength === 0 ? <h3>Não há nenhum hotel na sua lista.</h3> :
          (<ul className="hotel-list">
            {
              finalSortedData.map((item, index) => (
                <Hotel key={index} hotel={item}/>
              ))
            }
          </ul>)
      }
    </div>
  );
}

export default HotelList;