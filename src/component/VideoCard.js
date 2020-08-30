import React, {forwardRef} from 'react'
import './VideoCard.css';
import TextTruncate from "react-text-truncate";
import {ThumbUpSharp} from '@material-ui/icons';
 
const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({movie}, ref) => {        // ref: it is like pointer, it points to some stuff on your pge
    return (
        <div ref={ref} className="videoCard">
            {/* because some movie don't have backdrop_path */}
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            
            {/* very long overview so we truncate it, so add npm install react-text-truncate */}
            <TextTruncate
                line={1}           //if text goes ovee 1 line
                element="p"        //display it as p  
                truncateText="..." //replaced by this after 1 line (i.e after truncating add this as finishing touch)
                text={movie.overview}
            />

            <h2>{movie.title || movie.original_name}</h2>
            
            <p className="videoCard_stats">
                {/* display movie type if available */}
                {/* {movie.media_type && `${movie.media_type}`} */}
                {movie.release_date || movie.first_air_date}
                <ThumbUpSharp/>
                {movie.vote_count}
            </p>
        </div>
    )
})

export default VideoCard
