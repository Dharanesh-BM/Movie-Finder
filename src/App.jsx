import { useState } from 'react'
import searchLogo from '../public/search.png'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './MovieCard'

// API URL From OMDB
const API_URL = ' https://www.omdbapi.com/?apikey=619e7480'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovies = async (title) => {
    const response  = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)

    setMovies(data.Search)
  }
  
  return (
    <>
      <div className="app">
        <h1>Movie seracher</h1>
        <div className="search">
          <input type="text" placeholder='Search here...' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
          <img src={searchLogo} alt="Search Icon" onClick={()=>searchMovies(searchTerm)}/>
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie,index)=> (
              <MovieCard key={index} movie={movie}/>
            ))}
          </div>
        ): (
          <div className="empty">
            <h2>Search for your favroite movies & series</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default App
