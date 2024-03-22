import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { fetchFavMovieApi, fetchUserApi } from '../../services';
import { setUserData } from '../../reducers/userAccountReducer';
import { setfavoriteMovies } from '../../reducers/favoriteMovieReducer';
import './style.css'; 
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

const AccountPage = () => {
  const userData = useSelector((state)=>state.userAccount.userData);
  const favoriteMovies = useSelector((state)=>state.favoriteMovie.favoriteMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await fetchUserApi(`account/20960400`);
        dispatch(setUserData(user || []));

        const favoriteMovieData = await fetchFavMovieApi(`account/20960400/favorite/movies`);
        dispatch(setfavoriteMovies(favoriteMovieData));
        console.log("favorite",favoriteMovieData)

      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, [dispatch]);

  // if(userData.id === undefined){
  //   return <Navigate to="/login" replace={true} />
  // }

  return (
    <div className="account-page-container p-4">
      <div className="account-details-card row">
        {
          userData ?(
            <div className='user-details-container p-5 d-inline-flex'>
              <div className="avatar">
                {userData.avatar && userData.avatar.gravatar.hash && (
                  <img
                    src={`https://www.gravatar.com/avatar/${userData.avatar.gravatar.hash}`}
                    alt="Gravatar"
                  />
                )}
                {userData.avatar && userData.avatar.tmdb.avatar_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${userData.avatar.tmdb.avatar_path}`}
                    alt="TMDB Avatar"
                  />
                )}
              </div>
              <div className='user-details p-4'>
                <div className='user-name'>
                  {userData.username}
                </div>
                <div className='user-language'>
                  Language: {userData.iso_639_1}
                </div>
                <div className='user-country'>
                  Country: {userData.iso_3166_1}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading user data...</p>
          )
        }
        <div className="favorite-movies d-inline-flex pt-4">
            {
              favoriteMovies.map((favmovie, index) => (
                <div key={index}>
                  <div className="movie m-1 p-3">
                    <div className="movie-poster">
                      <Link to={`/movie/${favmovie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${favmovie.backdrop_path}`} alt={favmovie.name} />
                      </Link>
                    </div> 
                    <div className="movie-ratings">
                      <ProgressBar stars={favmovie.vote_average}/>
                    </div>
                    <div className="movie-name mb-4">
                      <h6>{favmovie.title||favmovie.original_title}</h6>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
