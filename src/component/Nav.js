import React from 'react'
import './Nav.css';
import tmdb from '../api/tmdb';

function Nav({setSelectedOption}) {
    return (
        <div className="nav">
            <h2 onClick={()=>setSelectedOption(tmdb.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchMystery)}>Mystery</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchWestern)}>Western</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchAnimation)}>Animation</h2>
            <h2 onClick={()=>setSelectedOption(tmdb.fetchTV)}>TV Movie</h2>
        </div>
    )
}

export default Nav
