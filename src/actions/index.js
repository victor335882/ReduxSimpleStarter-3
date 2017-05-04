import axios from 'axios';

const API_KEY = '288ef45e144445a30e70c416fd158bea';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export fonction fetchWeather(city) {

  const url=`${ROOT_URL}&q=${city,us}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  }

}
