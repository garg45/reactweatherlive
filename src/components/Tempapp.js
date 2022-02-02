import React, { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./css/style.css";
import TableA from "./TableA";
const Tempapp = ({ search }) => {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || []
  );
  useEffect(() => {
    const fetchApi = async () => {
      const SECRET_key = "9c6ddd829034c8b63902b05fe160b33f";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${SECRET_key}`;
      const response = await fetch(url);
      const res = await response.json();
      console.log(res);
      console.log(res.main);

      setCity(res.main);

      setWeather([...weather, res]);
    };

    fetchApi();
  }, [search]);


  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  return (
    <>
      <div className="box">
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <LocationOnIcon className="locationicon" />
                {search}
              </h2>
              <h1 className="temp">{city.temp}°Cel</h1>
              <h3 className="tempmin_max">
                Min : {city.temp_min}°Cel Max : {city.temp_max}°Cel
              </h3>
            </div>
            <div className="wave"></div>
            <div className="wave-two"></div>
            <div className="wave-three"></div>
          </div>
        )}
      </div>
      <TableA weather={weather} />
    </>
  );
};

export default Tempapp;