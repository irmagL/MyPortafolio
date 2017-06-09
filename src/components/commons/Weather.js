import React from 'react';

const Weather = ({ weather }) => {
  const TEMP = (weather.temperature - 32) / 1.8;
  const temperatura = `${Math.trunc(TEMP)} °C`;
  return (
    <div style={{ fontSize: '24px', color: 'rgba(0, 0, 0, 0.87)' }}>
      <span>{ temperatura }</span>
    </div>
  );
};

export default Weather;
