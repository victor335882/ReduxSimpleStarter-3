import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);

    //to make sure we will read correct props when submit
    //we bind the this of onFormSubmit to the this of constructor
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    //when user press submit button, it will return the term to fetchWeather
    this.props.fetchWeather(this.state.term);
    // And then reset the term to default value
    this.setState({term:''});
  }
  render() {
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite sities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className = "input-group-btn">
          <button type = "submit" className = "btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
