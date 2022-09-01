 
 import axios from '../../constant/axios'
import React, { useEffect, useState } from 'react'
import {imgUrl,API_KEY } from '../../constant/constant'
import Youtube from 'react-youtube'
 import "./rowpost.scss"


function RowPost({title,isSmall,url}) {
  const [movies,setMovies] = useState([])
  const [trailer,setTrailer] = useState()
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setMovies(response.data.results)
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleTrailer = (id)=>{
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    setTrailer(response.data.results[0])
  
   })
  }
  return (
    <div className="row">
        <h2>{title}</h2>

        <div className="posters">
          {
            movies.map((movie)=>{
              return <img onClick={()=>{
                handleTrailer(movie.id)
              }} className={isSmall ? 'smallPoster' : 'poster'} src={imgUrl+movie.backdrop_path} alt="poster" />
            })
          }
    
        </div>
       { trailer && <Youtube videoId={trailer.key} opts={opts}/>}
    </div>
  )
}

export default RowPost