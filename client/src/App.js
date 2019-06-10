import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path = '/' component = {MovieList} />
        <Route path = '/movies/:id' 
        render = {(props) => 
        <Movie 
          addToSavedList = {this.addToSavedList} 
          match = {props.match}
          history = {props.history}
          location = {props.location}
         /> 
          } />
      </div>
    );
  }
}


//<Route path = '/movies/:id' component = {Movie}  />
//<Route path = '/movies/:id' render = {() => <Movie addToSavedList = {this.addToSavedList} /> }/>

//When passing custom props down through <Route>, must use render instead of component. This means that you must explicity restate 
//all props that come with component, such as match, history and locaiton