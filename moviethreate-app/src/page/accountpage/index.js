// import { Navigate } from 'react-router-dom';
import UserDetails from '../../components/user-account/user-details';
import FavoriteMovies from '../../components/user-account/favorite-movies';
import './style.css'; 
import MovieWatchList from '../../components/user-account/movie-watchlist';

const AccountPage = () => {
  // if(userData.id === undefined){
  //   return <Navigate to="/login" replace={true} />
  // }

  return (
    <div className="account-page-container p-4">
      <div className="account-details-card row">
        <UserDetails/>
        <FavoriteMovies/>
        <MovieWatchList/>
      </div>
    </div>
  );
};

export default AccountPage;
