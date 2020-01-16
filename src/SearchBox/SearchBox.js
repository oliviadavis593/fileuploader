import React, { Component } from 'react';
import './SearchBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends Component {
  render() {
    return (
      <div className="SearchBox">
        <FontAwesomeIcon icon={faSearch}/>
        <input
          placeholder="Search term"
          value={this.props.searchTerm}
          onChange={e => this.props.handleUpdate(e.target.value)}/>
      </div>   
    );
  }
}

export default SearchBox;

//Explaining FontAwesomeIcon & faSearch
/*
- React component from 3rd party library 
- Used to display SVG icons 
- From popular Font Aweome Icon Collection 
- All available on npm 
*/

//Explaining value attribute 
/*
- searchTerm should be set in the input to be displayed
- we set the value attribue on the input to the searchTerm prop 

What happens = it will display what is typed into the search 
                & filter out the ones that don't match 
*/

//Explaining onChange
/*
- we added an onChange event handler to the input 
- wr invoke this callback gfunction whenever the content of input changes 
*/