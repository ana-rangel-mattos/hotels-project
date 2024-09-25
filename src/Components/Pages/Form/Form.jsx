import "./Form.css";
import {useContext} from "react";
import { HotelContext} from "../../../context/HotelContext.jsx";
import StarRating from "../../StarRating/StarRating.jsx";

function Form() {
  const { hotelName, handleSubmit, description, setDescription, city, countryState, rating, dailyPrice, setHotelName, setCity, setCountryState, setRating, setDailyPrice, setMainImg, setOptionalImg1, setOptionalImg2, setOptionalImg3, setOptionalImg4, optionalImg1, optionalImg2, optionalImg3, optionalImg4, mainImg } = useContext(HotelContext);

  return(
    <div className="form">
      <h2>Cadastrar Hotel</h2>

      <form className="container-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Hotel"
          id="hotel-name"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          name="hotel-name"/>
        <div className="error-message">Item obrigatório.</div>

        <textarea name="description" id="description" rows="10"
                  placeholder="Forneça-nos uma descrição detalhada do Hotel." value={description}
                  onChange={(e) => setDescription(e.target.value)}></textarea>
        <div className="error-message">Item obrigatório.</div>

        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Cidade"/>
        <div className="error-message">Item obrigatório.</div>

        <input
          type="text"
          value={countryState}
          onChange={(e) => setCountryState(e.target.value)}
          placeholder="Estado"/>
        <div className="error-message">Item obrigatório.</div>

        <input
          type="number"
          min="0"
          value={dailyPrice}
          onChange={(e) => setDailyPrice(Number(e.target.value))}
          placeholder="Preço da Diária"/>
        <div className="error-message">Item obrigatório.</div>

        <label htmlFor="rating">Classificação do Hotel:</label>
        <StarRating onRatingChange={setRating} rating={rating} id="rating" name="rating"/>
        <div className="error-message">Item obrigatório.</div>

        <label htmlFor="main-image">Imagem Principal</label>
        <input
          type="text"
          id="main-image"
          name="main-image"
          value={mainImg}
          onChange={(e) => setMainImg(e.target.value)}
          placeholder="Escolha uma imagem principal."/>
        <div className="error-message">Item obrigatório.</div>
        <label htmlFor="optional-image1">Imagem Opcinal 1</label>
        <input
          type="text"
          id="optional-image1"
          name="optional-image1"
          value={optionalImg1}
          onChange={(e) => setOptionalImg1(e.target.value)}
          placeholder="Imagem Opcional 1."/>

        <label htmlFor="optional-image2">Imagem Opcinal 2</label>
        <input
          type="text"
          id="optional-image2"
          name="optional-image2"
          value={optionalImg2}
          onChange={(e) => setOptionalImg2(e.target.value)}
          placeholder="Imagem Opcional 2."/>

        <label htmlFor="optional-image3">Imagem Opcinal 3</label>
        <input
          type="text"
          id="optional-image3"
          name="optional-image3"
          value={optionalImg3}
          onChange={(e) => setOptionalImg3(e.target.value)}
          placeholder="Imagem Opcional 3."/>

        <label htmlFor="optional-image4">Imagem Opcinal 4</label>
        <input
          type="text"
          accept="image/*"
          id="optional-image4"
          name="optional-image4"
          value={optionalImg4}
          onChange={(e) => setOptionalImg4(e.target.value)}
          placeholder="Imagem Opcional 4."/>

        <button type="submit">
          Salvar Hotel
        </button>
      </form>
    </div>
  )
}

export default Form;