import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from './components/Header' 
import Home from './pages/Home'

const classes = {
  container: {
    margin: '0 auto',
    padding: '5%'
  }

}

export default class App extends Component {
  render(){
    return (
      <div>
        <Header />
          <div style={classes.container}>
              <BrowserRouter>
                  <Route exact path="/" component={Home}/>
              </BrowserRouter>
          </div>
      </div>
    );
  }
}
