import React from 'react';
import Preloader from '../components/Preloader';
import Movies from './../components/Movies';
import SearchForm from './../components/SearchForm';


const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [
        ],
        serchText: '',
        typeOfMovie: 'all',
        isLoaded: false,
        firstComeIn: true,
    }
    getMovies(e) {
        e.preventDefault()

        if (this.state.firstComeIn)
            this.setState({ firstComeIn: false })

        this.setState({ isLoaded: false })

        setTimeout(()=> {
            let type = this.state.typeOfMovie === 'all' ? '' : '&type=' + this.state.typeOfMovie

            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.serchText}${type}`)
                .then((response) => response.json())
                .then((data) => {
                    this.setState({ movies: data.Search, isLoaded: true, })
                }) 
        },100)
    }
    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount() {
    }
    render(){
        const { serchText, movies, typeOfMovie} = this.state
        return (
            <div className="main">
                <div className="container">
                    <div className="main__inner">
                        <SearchForm getMovies={this.getMovies.bind(this)} serchText={serchText} handleInput={this.handleInput.bind(this)} typeOfMovie={typeOfMovie} />
                        {this.state.firstComeIn 
                            ? <div className='greetingText'>Enter name of <span>series </span>or <span>movie </span>  </div>  
                            :  <div>
                                    {this.state.isLoaded ? <Movies movies={movies} /> : <Preloader />}
                                </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Main