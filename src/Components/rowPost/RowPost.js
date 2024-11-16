import React ,{useEffect,useState} from 'react'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const[urlid,seturlId]=useState("")
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('network error')
    })

  },[])
  const opts = {
    height: '390',
    width: '100%',

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMOvie=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
console.log(response.data)
if(response.data.results.length!==0){
  seturlId(response.data.results[0])

}else{
  alert('trailer not available')
}
    })

  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
       {movies.map((obj)=>
                <img onClick={()=>handleMOvie(obj.id)} className={props.isSmall || props.isSmaller ?"smallPoster":'poster' }  src={`${imageUrl+obj.backdrop_path}`} alt="" />


       )}

      </div>
   { urlid && <YouTube opts={opts} videoId={urlid.key}/>} 
    </div>
  )
}

export default RowPost
