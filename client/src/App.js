import './App.css';
import Nav from './components/nav/Nav'
 import Header from './components/Header/Header';
import Content from './components/Content/Content';
import axios from 'axios'; 
import React from 'react';
axios.defaults.baseURL='https://api.themoviedb.org/3';
axios.defaults.params={

  api_key: '2d75a54fb2edb6c68751c89200faaa00',
};
const  App =()=> {
  return (<div>
    <Nav></Nav>
    <Header></Header>
    <Content></Content>
  </div>)
}

export default App;