import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY ,baseUrl,imageUrl } from '../../constants/constants';
import instance from '../../axios';

function Banner() {
    const [ movie, setMovie] = useState()
    useEffect(()=>{
        instance.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
            console.log(res.data.results[1],'response from the api trending............')
            const index = Math.floor(Math.random() * 20) + 1;
            console.log(index,'random numbers.....');
            setMovie(res.data.results[index]);
        })
        },[])
    return (
        <div 
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{ movie? movie.name || movie.title : "" }</h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
