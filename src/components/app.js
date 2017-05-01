import React, { Component } from 'react';
import BookList from '../containers/book-list';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}
