import React from "react"
import Movie from "./Movie"


function Movies(props) {
    const { movies = '' } = props
    return (
        <div  className="movies-list" >
            {!movies ? <div className="error__text"><span>Error:</span> Too many results or movies weren't found, try enter something else</div> : 
                movies.map(el => <Movie key={el['imdbID']}
                    title={el['Title']}
                    year={el['Year']}
                    poster={el['Poster']}
                    type={el['Type']} />)
            }
            
        </div>
        
    )
}

export default Movies