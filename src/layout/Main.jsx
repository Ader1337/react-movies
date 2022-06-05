import React, { useRef, useState } from 'react';
import Preloader from '../components/Preloader';
import Movies from './../components/Movies';
import SearchForm from './../components/SearchForm';


let  API_KEY = process.env.REACT_APP_API_KEY



function Main() {
    const [movies,setMovies] = useState([])
    const [searchText, setSearchText] = useState('')
    const [typeOfMovie, setTypeOfMovie] = useState('all')
    const [isLoaded, setIsLoaded] = useState(false)
    const [firstComeIn, setFirstComeIn] = useState(true)


    const handleInput = (e) => {
        if (e.target.name === 'serchText')
            setSearchText(e.target.value)
        else if (e.target.name === 'typeOfMovie')
            setTypeOfMovie(e.target.value)
    }
    const getMovies = (e) => {
        e.preventDefault()

        if (firstComeIn)
            setFirstComeIn(false)

        setIsLoaded(false)

        setTimeout(() => {
            let type = typeOfMovie === 'all' ? '' : '&type=' + typeOfMovie

            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}${type}`)
                .then((response) =>{
                    return response.json()
                } )
                .then((data) => {
                    setMovies(data.Search)
                    setIsLoaded(true)
                }).catch((err)=>{
                    console.error(err)
                    setIsLoaded(true)
                })
        }, 100)
    }

    return(
        <div className="main">
            <div className="container">
                <div className="main__inner">
                    <SearchForm getMovies={getMovies} serchText={searchText} handleInput={handleInput} typeOfMovie={typeOfMovie} />
                    {firstComeIn
                        ? <div className='greetingText'>Enter name of <span>series </span>or <span>movie </span>  </div>
                        : <div>
                            {isLoaded ? <Movies movies={movies} /> : <Preloader />}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main
