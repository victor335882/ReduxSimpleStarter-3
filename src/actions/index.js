//axios is a liabray that is solely made for making Ajax request from the browser
import axios from 'axios';
const API_KEY = '288ef45e144445a30e70c416fd158bea';

//Add the url to call the API
//Use backquote to insert javascript expressions,${API_KEY}
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Our application state holds all the data of our application
//includes stuf like weather data
//we only change our application state through our reducers and actions
//we will load our wearher data to actually change our application state
//and add that weather data, we need to diapatch an action witch are
//responsible for making that Ajax request


//to make our action types consistent between our actions and reducers
//we define a variable and assign the a string to it and export the variable
//and we will import FETCH_WEATHER in reducers
//this can prevent typing error when we want to change the
//string of action types
//we just change the string in this variabe
//and it changes in both action and reducer
export const FETCH_WEATHER = 'FETCH_WEATHER';



export fonction fetchWeather(city) {
  {
    //we can replace the city depend on our need
  }
  const url=`${ROOT_URL}&q=${city,us}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request,
  }

}
