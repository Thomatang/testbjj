import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NaviMenu from './NaviMenu';
import StudentList from './StudentList';
import AddProfile from './AddProfile';
import ClassRoom from './ClassRoom';

class App extends Component {
  render(){
    return (
      <div>
          <BrowserRouter>
              <div className="container">
                  <NaviMenu />
                  <Route exact path="/" component={StudentList}/>
                  <Route exact path="/addprofile" component={AddProfile}/>
                  <Route exact path="/classroom" component={ClassRoom} />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
