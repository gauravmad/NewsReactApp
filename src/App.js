import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';


export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>

        <div className='mt-[2vh] mx-auto bg-slate-100'>
          <News/>
        </div>

      </div>
    )
  }
}

