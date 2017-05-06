import React,{Component} from 'react';
import {connect} from 'react-redux';
class WeatherList extends Component {
  //add a function to retrive data of state,payload
  // from Ajax request after start the action
  renderWeather(cityData) {
    const name = cityData.city.name;
    return(
      <tr key={name}>
        <td>{name}</td>
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
