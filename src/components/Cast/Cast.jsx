import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../service/Api";
import Loader from "../Loader/Loader";

const Cast = () => {
  const { movieID } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const movie = await fetchMovieCast(movieID);
        setCast(movie);
      } catch (error) {
        console.error('Error fetching movie cast:', error); // Dodano logowanie błędu
      } finally {
        setIsLoading(false); // Przeniesiono tutaj, aby zapewnić wyłączenie ładowania niezależnie od wyniku
      }
    };

    fetchData();
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length !== 0 ? (
        <div>
          <h2>Movie Cast</h2>
          <ul>
            {cast.map((actor) => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w300${actor.profile_path}` : undefined}
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
    </>
  );
};

export default Cast;
