import React from 'react';
import './App.css';
//import logo from '../../logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../util/Yelp';


//App component class
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }
  //method to provide functionality to 'Lets go' button
  searchYelp(term, location, sortBy){
    //simulate searching Yelp app. will be updated in future edits
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.setState({businesses: businesses});
    }); 
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }
}

export default App;
