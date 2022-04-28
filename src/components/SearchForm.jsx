function SearchForm(props) {
    const { serchText, handleInput, typeOfMovie, getMovies } = props
    return (
        <form className="search">
            <div className="search__top">
                <input name="serchText" 
                       value={serchText} 
                       onChange={ handleInput} 
                       type='text' 
                       placeholder="Search" 
                       className="search__input"></input>
                <button onKeyDown={(e) => e.target.key === 'Enter' ? getMovies() : null} 
                        onClick={ getMovies } 
                        className="search__btn" 
                        type="submit">Search</button>
            </div>
            <div className="search__bottom">
                <label >
                    <input onChange={handleInput} 
                           checked={typeOfMovie === 'all'} 
                           name="typeOfMovie" 
                           type="radio" 
                           value='all' 
                           className="search__radio" />
                    All
                </label>
                <label >
                    <input onChange={handleInput} 
                           checked={typeOfMovie === 'series'} 
                           name="typeOfMovie" 
                           type="radio"
                           value='series' 
                           className="search__radio" />
                    Only series
                </label>
                <label >
                    <input onChange={handleInput} 
                           checked={typeOfMovie === 'movie'} 
                           name="typeOfMovie" 
                           type="radio" 
                           value='movie' 
                           className="search__radio" />
                    Only movies
                </label>
            </div>
        </form>
    )
}

export default SearchForm