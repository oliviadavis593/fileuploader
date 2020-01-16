import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term=>this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)}/>
        <FilterableList
          files={this.props.files}  
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}/>
      </div>
    );
  }
}

export default App;

//Initial Phase
/*
- App is composed of two components (searchBar & FilterableList)
- We made sure to pass the files prop along to FilterableList
*/

//Explaining the state phase
/*
- filterOption & searchTerms common ancestor is the App component
- We set filterOption to 'All'
- The initial value of searchTerm = ''
- This means that by default we will display all files 
  & there should be no searchTerm entered in the search box
 */

 //Why searchTerm & filterOption
 /*
 - SearchTerm = changes as the user interacts with the app 
                and displays updates as this value changes
 - filterOption = changes & causes the app to update
 - SearchTerm is mutated by the SearchBox component
 - filterOption = changes wahat it displays when the state changes 

 What happens = The only files that are selected in the filter will be shown
                and/or the only files that are searched will be shown 
 */

 //Interactivity Phase
 /* 
 - we added the updateSearchTerm method to update the state 
 - we then pass a callback prop to the searchBar 
 */
 