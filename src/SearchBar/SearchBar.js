import React, { Component } from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__heading">
          <h1>File Uploader</h1>
        </div>
        <div className="SearchBar__controls">
          <SearchBox
            searchTerm={this.props.searchTerm}
            handleUpdate={this.props.handleUpdate}/>
          <FilterOptions
            filterOption={this.props.filterOption}
            handleFilterChange={this.props.handleFilterChange}/>
        </div>
      </div>
    );
  }
}

export default SearchBar; 

//Phase 1: Explaining the code
/*
- Simply put the components that are nested 
  into SearchBar inside SearchBar render
*/

//Phase 2: passing props searcTerm & filterOption
/*
- SearchBar component isn't using these props directly 
- But rather passing them along to the respective child components 
- All we needed to do was pass them inside the child components 
*/

//Phase 3: Interactivity 
/*
- we passed a function to SearchBox component 
*/