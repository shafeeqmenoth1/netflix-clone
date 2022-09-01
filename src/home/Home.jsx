import Banner from "../components/Banner/Banner"
import Navbar from "../components/navBar/Navbar"
import RowPost from "../components/RowPost/RowPost"
import {originalUrl,actionUrl,comedyurl,horrorUrl,romanceUrl } from '../constant/constant'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
        <Navbar/>
       <Banner/>
      <RowPost url={originalUrl} title='Netflix Originals'/>
      <RowPost url={actionUrl} title='Action' isSmall/>
      <RowPost url={comedyurl} title='Comedy' isSmall/>
      <RowPost url={horrorUrl} title='Horror' isSmall/>
      <RowPost url={romanceUrl} title='Romance' isSmall/>
    </div>
  
  
  )
}

export default Home