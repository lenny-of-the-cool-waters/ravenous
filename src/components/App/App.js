import React from 'react';
import './App.css';
//import logo from '../../logo.svg';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

//business object
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

//businesses array
let businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

//App component class
class App extends React.Component {
  //method to provide functionality to 'Lets go' button
  searchYelp(term, location, sortBy){
    //simulate searching Yelp app. will be updated in future edits
    console.log(`Searching Yelp with ${term}, ${location} and ${sortBy}`);
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
