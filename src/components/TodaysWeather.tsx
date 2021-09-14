/* eslint-disable camelcase */
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { CustomTheme } from '../theme';
import { ClassNameProps } from '../utils/types';
import { CardWidget } from './Card';
import CustomCircularProgress from './CustomCircularProgress';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme: CustomTheme) => ({
  todaysWeatherRoot: {},
}));
export interface CurrentWeatherResponse {
  base: string;
  clouds: { [name: string]: string };
  cod: number;
  coord: { lat: number; long: number };
  dt: number;
  id: 0;
  main: { temp: number; feels_like: number; humidity: number; pressure: number; temp_max: number; temp_min: number };
  name: string;
  sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
  weather: Array<{ id: number; main: string; description: string; icon: string }>;
}
const convertKtoF = (kelvin?: number) => {
  if (!kelvin) {
    return 0;
  }
  const celsius = kelvin - 273;

  // Calculating Fahrenheit temperature to the nearest integer
  const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
  return fahrenheit;
};
export const TodaysWeather = (props: ClassNameProps & { zip?: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, zip = 10019 } = props;
  const [weatherData, setWeatherData] = useState<Partial<CurrentWeatherResponse>>({});
  const fetchNewWeather = () => {
    setWeatherData({});
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${'us'}&appid=${
        process.env.REACT_APP_OPEN_WEATHER_API_KEY
      }`
    ).then(async (data) => {
      setWeatherData(await data.json());
    });
  };
  useEffect(() => {
    fetchNewWeather();
    setTimeout(fetchNewWeather, 3600000);
  }, []);
  return (
    <CardWidget onClick={fetchNewWeather} title={`Weather for ${weatherData.name || ''}`}>
      <>
        {!weatherData?.main ? (
          <CustomCircularProgress text={'Loading Weather'} />
        ) : (
          <>
            Current: {convertKtoF(weatherData?.main?.temp)}&deg;,{'  '}Feels like:{' '}
            {convertKtoF(weatherData?.main?.feels_like)}&deg;
            <br />
            High: {convertKtoF(weatherData?.main?.temp_max)}&deg;
            <br />
            Low: {convertKtoF(weatherData?.main?.temp_min)}&deg;
            <br />
            {weatherData?.weather?.[0]?.main}: {weatherData?.weather?.[0]?.description}
          </>
        )}
      </>
    </CardWidget>
  );
};
