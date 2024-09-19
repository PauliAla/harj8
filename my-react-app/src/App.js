import React from 'react';
import './App.css';

import Green from './components/Green';
import Blue from './components/Blue';
import Yellow from './components/Yellow';
function Flag(props){
  var cssStyle = {
    height:100,
    width:100
  }
  return(
    <div> {props.maa}</div>
  )
}
function App () {

    return (
    <div>
      <img src="https://www.nordisklitteratur.org/media/113039/flagg__dk.jpg"
        alt="error"
        width="150px"
        border="2px solid"
         height="100px" /> 
         
        <Flag maa="Tanska"/>
   
        <img src="https://th.bing.com/th/id/R.153f7033db67fcf698e5a8229c1c2397?rik=IBL6EgAA51x2Kw&riu=http%3a%2f%2ffamouswonders.com%2fwp-content%2fuploads%2f2011%2f02%2fflag-of-norway.png&ehk=%2b%2f9sLxnNqkrHcggf6GnpfUUXBYa7VGp3XkOALNOYLoE%3d&risl=&pid=ImgRaw&r=0"
        alt="error"
        width="150px"
        border="2px solid"
         height="100px" /> 
         
        <Flag maa="Norja"/>
    
        <img src="https://www.publicdomainpictures.net/pictures/250000/velka/sweden-flag.jpg"
        alt="error"
        width="150px"
        border="2px solid"
         height="100px" /> 
         
        <Flag maa="Ruotsi"/>
        
        <img src="https://th.bing.com/th/id/OIP.wvaOM-rWmPZ-93yZaiRpbgHaEh?rs=1&pid=ImgDetMain"
        alt="error"
        width="150px"
        border="2px solid"
         height="100px" /> 
         
        <Flag maa="Suomi"/>
        
    </div>
  );
}


export default App;
