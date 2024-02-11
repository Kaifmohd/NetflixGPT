import React from 'react'

import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackground = ({movieId}) => {
    //useState
    //const [trailerId, setTrailerId] = useState(null);

    const trailerVideo = useSelector(store=> store.movies?.trailerVideo);
    useMovieTrailer(movieId);

    return (
    
    // Fetch trailer videos api
    <div className='w-screen'>
        <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=1&playsinline=1&autohide=1&fs=0&iv_load_policy=3&cc_load_policy=0`} title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowsInlineMediaPlayback></iframe>
    </div>
  )
}

export default VideoBackground