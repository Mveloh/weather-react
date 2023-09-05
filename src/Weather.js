import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(`the weather in Durban is ${Math.round(response.data.main.temp)}°C`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=c119ffef35b7245a5e03b6e5724ae961&units=metric`;
  axios.get(url).then(displayTemperature);
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
