import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../service/Api";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let subscribed = true; // Kontroluje, czy komponent jest zamontowany

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movieReviews = await fetchMovieReviews(movieID);
        if (subscribed) { // Aktualizuje stan tylko jeśli komponent jest zamontowany
          setReviews(movieReviews);
        }
      } catch (error) {
        console.error(error); // Logowanie błędów
      } finally {
        if (subscribed) {
          setIsLoading(false); // Zawsze wyłącz ładowanie, jeśli komponent jest zamontowany
        }
      }
    };

    fetchData();

    return () => {
      subscribed = false; // Zaznacz, że komponent został odmontowany
    };
  }, [movieID]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};

export default Reviews;
