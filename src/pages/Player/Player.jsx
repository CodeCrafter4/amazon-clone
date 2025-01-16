import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'


const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();


  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWY3ZjZkMzNiOGZhZDNlNjlhODM3ODJhMTM2NTA2NCIsIm5iZiI6MTcyMzY1MjQ2NC4wODc5ODUsInN1YiI6IjY2YmNkNWRkZTA3YzNmOTEwNGQwNTQ3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ODI3tFYvZ4qtl2y_2MT-dc5nRSgEdJwMmtssX0Mx82s'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]) )
    .catch(err => console.error(err));
  },[])




  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
        <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>
      <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}

export default Player