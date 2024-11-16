import React, { useEffect } from 'react'
import axios from "../../axios"
import { API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import { useState } from 'react'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response)=>{
            const results=response.data.results
            console.log(results)
            const randomIndex=Math.floor(Math.random()*results.length)
            setMovie(results[randomIndex])
        })



    },[])
    return (
        
        <div 
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path:""})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title :""}</h1>
                <div className='banner-buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview :""} </h1>
            </div>
            <div className="fade-bottom">

            </div>
        </div>
    )
}

export default Banner
