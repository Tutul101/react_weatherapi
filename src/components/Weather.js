import React, { useState, useEffect } from "react";
import { FaStreetView } from "react-icons/fa";
const Weather = () => {
  const [searchData, setSearchData] = useState("kolkata");

  const [city, setCity] = useState({});
  const searchChangeHandler = (event) => {
    // console.log(event.target.value);
    setSearchData(event.target.value);
  };
  const fetchData = async () => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchData}&units=metric&appid=f2614ab2114a6ddcd2c61d24fb7f5b54`;
    try {
      const response = await fetch(url);
      console.log(response);
      const resposejson = await response.json();
      console.log(resposejson);
      setCity(resposejson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchData]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={searchChangeHandler}
            value={searchData}
          ></input>
        </div>
        {city.cod === 200 ? (
          <>
            <div className="info">
              <FaStreetView className="icon"></FaStreetView>
              <h2 className="city">{searchData}</h2>
              <h1 className="temp">{city.main.temp}°cel</h1>
              <h4>(Feels Like: {city.main.feels_like}°cel)</h4>
              <h3 className="temp_min_max">
                Min: {city.main.temp_min}°cel | Max : {city.main.temp_max}°cel
              </h3>
            </div>
          </>
        ) : (
          <h2 className="nodata">No data found</h2>
        )}
      </div>
    </>
  );
};
export default Weather;
