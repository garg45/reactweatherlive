import React, {useContext, useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./css/style.css";
import TableA from "./TableA";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import Inputcontext from "./store/ContextApi";

const Tempapp = () => {
  const ctx = useContext(Inputcontext);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState(
    JSON.parse(localStorage.getItem("weather")) || []
  );
  useEffect(() => {
    const fetchApi = async () => {
      const SECRET_key = "9c6ddd829034c8b63902b05fe160b33f";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ctx.name}&units=metric&appid=${SECRET_key}`;
      const response = await fetch(url);
      const res = await response.json();
      console.log(res);
      console.log(res.main);

      setCity(res.main);
      setLoading(false);

      setWeather([...weather, res]);
    };
    fetchApi();
  }, [ctx.name]);

  useEffect(() => {
    localStorage.setItem("weather", JSON.stringify(weather));
  }, [weather]);

  return (
    <>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <>
          <div className="box">
            {!city ? (
              <p className="errorMsg">No Data Found</p>
            ) : (
              <div>
                <div className="info">
                  <h2 className="location">
                    <LocationOnIcon className="locationicon" />
                    {ctx.name}
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
          {city ? <TableA weather={weather} /> : ""}
        </>
      )}
    </>
  );
};

export default Tempapp;
