import React from "react";

const Result = (props) => {
  const { err, value, city, sunrise, sunset, temp, pressure, wind } =
    props.weather;
  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div className="result">
        <div>
          Pogoda dla: <strong>{city}</strong>
        </div>
        <div>
          Temperatura: <strong>{temp} °C</strong>
        </div>
        <div>
          Wiatr: <strong>{wind} m/s</strong>
        </div>
        <div>
          Ciśnienie: <strong>{pressure} mb</strong>
        </div>
        <div>
          Wschód słońca: <strong>{sunriseTime}</strong>
        </div>
        <div>
          Zachód słońca: <strong>{sunsetTime}</strong>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="result">
        {err ? `Nie mamy w bazie miasta: ${value}` : content}
      </div>
    </>
  );
};

export default Result;
