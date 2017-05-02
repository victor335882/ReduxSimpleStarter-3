import React, {Component} from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};
    {
      //this which is our instance of SearchBar
      //has a function called onInputChange
      //bind that function to this which is our instance of SearchBar
      //and then replace onInputChange
      //with the new bound instance of this
      //store the value in this.onInputChange
    }
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    console.log(event.target.value);
    this.setState({term:event.target.value});
  }
  render() {
    return(
      <from className="input-group">
      {
      //Due to the this here is not link to that this
      //in function onInputChange(event)
      //we need to add this.onInputChange = this.onInputChange.bind(this);
      //in constructor to bind it
      }
        <input
          placeholder="Get a five-day forecast in your favorite sities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className = "input-group-btn">
          <button type = "submit" className = "btn btn-secondary">Submit</button>
        </span>
      </from>
    )
  }
}
