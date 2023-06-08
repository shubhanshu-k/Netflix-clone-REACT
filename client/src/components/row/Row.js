import {useEffect,useState} from 'react'
import axios from 'axios';
import React from 'react';
import './Row.css';
import Card from '../card/Card';
export default function Row(props) {
    const [movies, setMovies]= useState([]);
    const fetchMovies= async ()=>{
        const response= await axios.get(props.url,{
params:{
limit:10
       }   });
        setMovies(response.data.results);
    }
    useEffect(() => {
    fetchMovies();  
      
    });
    
  return (
    <div className='row_wrapper'>
        <h3 className='row-title'>{props.title}</h3>
  <div className='row_card'>     
{movies.map((el)=>{
    console.log(el);
      return <Card title ={el.title}
    poster={el.backdrop_path} id={el.id}/>;
})}
</div>

</div>
  );
}
