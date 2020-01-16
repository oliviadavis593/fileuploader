import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
        .filter(file => file.name.includes(searchTerm)
              && (filterOption === 'All' || file.status === filterOption))
        .map((file, key) => <ListItem {...file} key={key} />);
    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}

FilterableList.defaultProps = {
  files: []
};


export default FilterableList;


//Explaining the initial code
/* 
- Component is responsible for taking the array of files as a prop named files
- And displaying a ListItem for each file in the array 
- map method is used to iterate the array 
  and outout ListItem component for each file
*/

//Explaining the const's 
/*
//1st const 
- we use these 2 values to filter the array of files displayed

//2nd const
- we access the values from the props 
- iterate over the files array (keeping those that match the criteria)
- file name contains the searcTerm 
- file status is = to the filterOption or the filterOption is 'All'
*/