import React, { useEffect, useState } from 'react'
import "./banner.scss"
import axios from '../../constant/axios'
import { API_KEY,imgUrl } from '../../constant/constant'
function Banner() {
    const [movie,setMovie]=useState({})
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[0])
        })
    },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${imgUrl+movie.backdrop_path} )`}}>
        <div className="content">
            <h1 className='title'>{movie.title}</h1>
        
        <div className="banner-buttons">
            <button className='button'><i className="fa-solid fa-play"></i>Play</button>
            <button className='button'><i className="fa-solid fa-plus"></i>My List</button>
        </div>
            <div className="discription">
                <h4>{movie.overview}</h4>
            </div>
            </div>
           <div className="fade"></div>
    </div>
  )
}

export default Banner