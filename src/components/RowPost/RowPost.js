import React, { useEffect, useState } from 'react';
import './RowPost.css';
import instance from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import Youtube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
   useEffect(()=>{
    instance.get(props.url).then((res)=>{
        console.log(res.data,'data from the originals.......');
        setMovies(res.data.results)
    })
   },[])

   const opts = {
    height: '500',
    width: '100%',
    playerVars: {
     
      autoplay: 0,
    },
  };

  const handleMovie = (id)=>{
    console.log(id,'when click on movie')
    instance.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        console.log(res.data,'from the movie trailer........')
        if(res.data.results.length !== 0){
            setUrlId(res.data.results[0])
        }else{
            console.log('no trailers found...')
        }
       
    })

  }

    return (
        <div className='row'>
            <h2 className='titles'>{props.title}</h2>
            <div className='posters'>
                
                {movies.map((val)=><img onClick={()=>{handleMovie(val.id)}} className={props.isSmall ? 'smallposter' : 'poster' } alt='poster' src={`${imageUrl+val.backdrop_path}`} />)}

            </div>
           { urlId && <Youtube videoId={urlId.key} opts={opts} />} 
        </div>
    )
}

export default RowPost
