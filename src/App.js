import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals,actions, horror } from './urls';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={actions} title="Action"/>
        <RowPost url={horror} title="Horror" isSmall />
    </div>
  );
}

export default App;
