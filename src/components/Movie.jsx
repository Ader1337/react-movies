function Movie(props) {
    return (
        <div className="movie-item">
            <div className="movie-item__wrapper">
                <div className="movie-item__poster">
                    {
                        props.poster == 'N/A' && props.poster.type ==  undefined
                            ? <img src='https://via.placeholder.com/500x600?text=The+image+is+unavailable' /> 
                            :  <img src={props.poster} />
                    }
                    
                </div>
                <div className="movie-item__info">
                    <div className="movie-item__info-top">
                        <p className="movie-item__name">{props.title}</p>
                        <p className="movie-item__year">{props.year}</p>
                    </div>
                    <p className="movie-item__type">{props.type}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie

