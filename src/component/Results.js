import React, {useState, useEffect} from 'react'
import './Results.css';
import VideoCard from './VideoCard';
import axios from '../api/axios';
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {

    // initially empty array
    const [movies, setMovies] = useState([]);

    // useEffect: allow function component to use lifecycle method
    useEffect(()=>{
        // run this code only once when this component(Result) loads / mounts
        async function fetchData() {
            // get the responce from api
            const response = await axios.get(selectedOption);
            
            // update the state
            setMovies(response.data.results);
            console.log(response.data.results[0])
            
            // jump out of async function 
            return response;
        }
        fetchData();
    },[selectedOption])     // means anytime selectedOption change run this code

    /*
    useEffect(()=>{
        run this code every time when this component(Result) loads / mounts    
    })
    */

    /*
    useEffect(()=>{
        run this code  once when this component(Result) loads / mounts
        & also run this code every time when the "name" is change
    },[name])
    */


    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => <VideoCard key={movie.id} movie={movie}/> )}
            </FlipMove>
        </div>
    )
}

export default Results
