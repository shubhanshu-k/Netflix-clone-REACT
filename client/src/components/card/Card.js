import React from 'react'
import './Card.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Card(props) {
  const imageUrl= `https://image.tmdb.org/t/p/original/${props.poster}`;
  const [video, setVideo]=useState('');
  const [isHovered ,setisHovered]=useState(false);
  const HandleMouseEnter=()=>{
    setisHovered(true);
  }
  const HandleMouseExit=()=>{
    setisHovered(false);
  }

  
  const youtubeUrl=`https://www.youtube.com/embed/`;
  const fetchURL =async ()=>{
    try{
    const response =await axios.get(`/movie/${props.id}`,{
      params:{
        limit:'10',
        append_to_response:'videos',
      },
    }); 
   if(response.data.videos.results.length>0){ 
    setVideo(response.data.videos.results[0].key);
    console.log(response.data.videos.results[0].key);
   }
} //ek baari jo usne soltuon bty hai wo t ha wait ye fucntionality hta du kya? vaisi
catch(e){
    console.log(e);
}
  }
  useEffect(() => {
    fetchURL();
  });
  
  console.log(imageUrl);  
  return (
    <div
    onMouseEnter={HandleMouseEnter}
    onMouseLeave={HandleMouseExit}
    >
       {!isHovered ?( <img className='card_poster' alt='poster' src={imageUrl}/>
   ): (<iframe
  allowFullScreen
   allow='accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope;'
   title='Youtube Video Player'
   width='100%'
    height='100%'
    src={`${youtubeUrl}${video}`}
    ></iframe>)}
    </div>
  )
}
