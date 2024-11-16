import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Components/NavBar/NavBar.css"
import './App.css'
import Banner from "./Components/Banner/Banner";
import './Components/Banner/Banner.css'
import RowPost from "./Components/rowPost/RowPost";
import './Components/rowPost/RowPost.css'
import {actions,animation, fantasy, crime} from './urls'


function App() {
  return (
 <div>
  <NavBar/>
  <Banner/>
  <RowPost url={fantasy} title='Netflix fantacy'/>
  <RowPost url={actions} title='Action' isSmall/>
  <RowPost url={animation} title='Animation' isSmall/>
  <RowPost url={crime} title='Crime' isSmaller/>

 </div>
  );
}

export default App;
