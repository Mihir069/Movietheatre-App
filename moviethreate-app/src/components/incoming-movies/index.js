
import MovieCard from "../common/movie-cards";
import { MovieContext } from "../movie-context";
import { useContext } from "react";
const IncomignMovie= () =>{
    const {movies,movieGenre} = useContext(MovieContext)
    console.log("Movies",movies)
    if(!movies){
        return(
            <div>Loading.....</div>
        )
    }
    return(
        <section className="my-5">
            <div className="genre-heading">
                New Incoming
            </div>
            <div className="movie-card-container">
                <div className="movie-card d-inline-flex">
                    {
                        movies.map((movie,index)=>(
                            <MovieCard key={index} movie={movie} movieGenre={movieGenre}/>
                        ))
                    }
                </div>
    
            </div>
        </section>

    )
}
export default IncomignMovie;