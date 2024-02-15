import { useMovie } from "../movie-context"
import MovieCard from "../common/movie-cards";
const PopulerMovies = () =>{
    const {populerMovie,movieGenre} = useMovie();
    if(!populerMovie){
        return(
            <div>Loading....</div>
        )
    }
    return(
        <section className="my-5">
            <div className="genre-heading">
                Populer Movies
            </div>
            <div className="movie-card-container">
                <div className="movie-card d-inline-flex">
                    {
                        populerMovie.map((movie,index)=>(
                            <MovieCard movie={movie} index={index} movieGenre={movieGenre}/>
                        ))
                    },
                </div>
            </div>
        </section>
    )
}
export default PopulerMovies;