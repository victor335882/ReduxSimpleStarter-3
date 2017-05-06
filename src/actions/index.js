import axios from 'axios';

const API_KEY = '288ef45e144445a30e70c416fd158bea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

  const url=`${ROOT_URL}&q=${city},us`;
  {
    //the code we written is a synchronous in nature
    //normally we have to pass a callback to it or do with a promise
    //but we don't, that's the point of redux promise to clean up our code
    //Due to axios will return a promise which dosen't actually contain any of our date
    //but wr will return our promise on the payload key
  }

  const request = axios.get(url);
  {
    //the request here is a promise in middleware
  }
  console.log('Request:',request);
  {
    //we assign the promise to the payload key
    //and then that goes off to our reducer,reducer_weather.js
    //if action payload is a promiss, redux promise will stop it
    //once the Ajax request finishes, it create a new action of
    //the same type but with a payload of the resolved of request
    //and sent it through to the reducers
  }
  return {
    type: FETCH_WEATHER,
    payload: request,
  }

}
