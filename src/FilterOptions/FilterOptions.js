import React, { Component } from 'react';
import './FilterOptions.css';

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption ==="All"}
              />
          All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
              checked={filterOption ==="Uploaded"}
              />
          Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_synced">
            <input
              type="radio"
              value="Synced"
              id="filter_synced"
              name="filter"
              checked={filterOption ==="Synced"}
              />
          Synced
          </label>
        </div>
        <div className="FilterOptions__option">  
          <label htmlFor="filter_new">
            <input
              type="radio"
              value="New"
              id="filter_new"
              name="filter"
              checked={filterOption ==="New"}
              />
          New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;

//Explainning Component use
/*
- This component is used for adding the radio boxes to the SearchBar
 */

 //Explaining checked attribute (state)
 /*
 - we have a number of radio buttons 
 - the one to be selected is determined by the value of filterOption in the state
 - passed to this component as a prop (const {filterOption} = this.props)
 - you will not be able to to change the searchTerm or filterOption items on the screen
    until you write event handlers
 */