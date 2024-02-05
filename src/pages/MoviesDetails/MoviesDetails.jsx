import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../service/Api";
import BackLink from "../../components/BackLink/BackLink";

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieID } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movie = await fetchMovieDetails(movieID);
        setMovieDetails(movie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      <BackLink to={backLinkHref}>Go Back</BackLink>
      <div>
        <img
          src={
            movieDetails.poster_path &&
            `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
          }
          alt={movieDetails.title}
        />
        <h1>{movieDetails.title && movieDetails.title}</h1>
      </div>
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesDetails;
