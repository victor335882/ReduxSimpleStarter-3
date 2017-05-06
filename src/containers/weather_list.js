import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  //add a function to retrive data of state,payload
  //from Ajax request after start the action
  //and this function is used to present a single city, a single row
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          //use a separate reuseful functional component
          <Chart data={temps} color="orange" />
        </td>
      </tr>
    )
  }
  render() {
    return (
      <table className = "table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

//function mapStateToProps(state) {
//  return {weather:state.weather};
//}
//write in es6 syntex
function mapStateToProps({weather}) {
  return {weather}
}
export default connect(mapStateToProps)(WeatherList);
