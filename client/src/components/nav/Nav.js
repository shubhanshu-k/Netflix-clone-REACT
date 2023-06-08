import './Nav.css'
import React from 'react';
import { useState,useEffect} from 'react'
const Nav =()=>{
   const [show, setShow]=useState(false);
   const scrollHandler =()=>{
    if(window.scrollY>10){
        setShow(true);

    }
    else {setShow(false);}
   };
   useEffect(()=>{
     window.addEventListener("scroll",scrollHandler);
        
        return ()=>{
            window.removeEventListener('scroll',scrollHandler);
        };
   },[])
    return( <nav
    style={
        {
            backgroundColor: show ? 'rgb(20,20,20)' : 'transparent',
        }
    }
    >
 <section>
       <div className="nav_left">
<img className="nav_logo"
alt="logo"
src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
/>
<div className="nav_links">
<a href='/'>Home</a>
<a href='/'>Tv shows</a>
<a href='/'>Tv movies</a>
<a href='/'>New & Popular</a>
<a href='/'>My List</a>
<a href='/'>Browse by Language</a>
</div>
       </div>
        <div className ="nav_right"></div>
</section>
    </nav>)
}
export default Nav