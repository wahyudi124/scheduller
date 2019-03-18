import React, { Component } from 'react';
import './App.css';
import CalendarLeft from './CalendarLeft';
import CalendarRight from './CalendarRight';

class App extends Component {
  render() { 
    return (
    <div class="ml-calendar">
      <CalendarLeft/>
      <CalendarRight/>
		<div class="clear"></div>
    </div>
    );
  }
}

export default App;
