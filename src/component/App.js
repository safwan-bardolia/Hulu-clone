import React,{useState} from 'react';
import './App.css';
import Header from './Header'; 
import Nav from './Nav';
import Results from './Results';
import tmdb from '../api/tmdb';

function App() {

  // let initial selected option is Trending
  const[selectedOption, setSelectedOption] = useState(tmdb.fetchTrending);

  return (
    <div className="app">

      <Header/>

      {/* we are directly passing modifier function as props */}
      {/* very imp & easy & very classy */}
      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption}/>

    </div>
  );
}

export default App;
