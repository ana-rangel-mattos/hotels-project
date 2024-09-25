import { createContext, useEffect, useState } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HotelContext = createContext();

export const HotelProvider = ({ children }) => {
  const [hotelName, setHotelName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [countryState, setCountryState] = useState("");
  const [rating, setRating] = useState(0);
  const [dailyPrice, setDailyPrice] = useState(null);
  const [mainImg, setMainImg] = useState(null);
  const [optionalImg1, setOptionalImg1] = useState(null);
  const [optionalImg2, setOptionalImg2] = useState(null);
  const [optionalImg3, setOptionalImg3] = useState(null);
  const [optionalImg4, setOptionalImg4] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem('data')) || []
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify([...data]));
  }, [data]);

  function cleanFields() {
    setHotelName("");
    setCity("");
    setCountryState("");
    setDescription("")
    setRating(0);
    setDailyPrice(0);
    setMainImg(null);
    setOptionalImg1(null);
    setOptionalImg2(null);
    setOptionalImg3(null);
    setOptionalImg4(null);
    setSelectedId(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedId) {
      handleEditHotel();
      toast.success("Hotel editado com sucesso!");
    } else {
      if (!hotelName || !city || !countryState || !dailyPrice || dailyPrice <= 0 || !mainImg || !rating) {
        toast.warning("Preencha todas as informações obrigatórias!")
        return;
      } else {
        const newHotel = {
          id: Date.now(),
          hotelName, city, countryState, description, rating, dailyPrice, favorite: false, mainImg, optionalImg1, optionalImg2, optionalImg3, optionalImg4,
        }

        handleAddHotel(newHotel);
        cleanFields();
        toast.success("Hotel cadastrado com sucesso!");
      }
    }
  }

  function handleAddHotel(hotel) {
    setData((data) => [...data, hotel]);
  }

  function handleDeleteHotel(id) {
    setData((data) => data.filter(item => item.id !== id));
  }

  function handleFillForm(item) {
    setSelectedId(item.id);
    setHotelName(item.hotelName);
    setCity(item.city);
    setCountryState(item.countryState);
    setRating(item.rating);
    setDailyPrice(item.dailyPrice);
    setMainImg(item.mainImg);
    setOptionalImg1(item.optionalImg1);
    setOptionalImg2(item.optionalImg2);
    setOptionalImg3(item.optionalImg3);
    setOptionalImg4(item.optionalImg4);
  }

  function handleEditHotel() {
    setData((data) => data.map(hotel => hotel.id === selectedId ? {...hotel, hotelName, city, countryState, rating, dailyPrice, mainImg, optionalImg1, optionalImg2, optionalImg3, optionalImg4} : hotel));
    cleanFields()
  }

  function handleToggleFavorite(id) {
    setData((data) => data.map(hotel => hotel.id === id ? {...hotel, favorite: !hotel.favorite} : hotel));
  }

  return <HotelContext.Provider value={{hotelName, handleSubmit, description, setDescription, city, countryState, rating, dailyPrice, handleToggleFavorite, mainImg, optionalImg1, optionalImg2, optionalImg3, optionalImg4, setHotelName, setCity, setCountryState, setRating, setDailyPrice, setMainImg, setOptionalImg1, setOptionalImg2, setOptionalImg3, setOptionalImg4, data, handleDeleteHotel, handleFillForm}}>{children}</HotelContext.Provider>
}