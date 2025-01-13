import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FormReview from "../components/FormReview";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const rating = movie && typeof movie.rating === "number" ? movie.rating : 0;
  const formattedTitle = movie
    ? movie.title.replace(/\s+/g, "_").toLowerCase()
    : "";
  const imageUrl = movie ? `http://localhost:3000/${formattedTitle}.jpg` : "";

  function fetchMovie() {
    axios
      .get(`http://localhost:3000/api/films/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
      });
  }

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div>
      <button className="btn fs-1 brand-cl-bg py-0 px-3 mb-0 m-4 sticky-button">
        <NavLink to="/">&lt;</NavLink>
      </button>
      <section className="container-sm">
        <div className="container d-flex justify-content-center align-items-center py-4">
          <img className="detail-image" src={imageUrl} alt="poster" />
          <div className="mx-3">
            <h1>{movie ? movie.title : "Titolo film"}</h1>
            <p>{movie ? movie.director : "director"}</p>
            <p>{movie ? movie.genre : "genere"}</p>
            <div className="rating">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  style={{
                    color:
                      index < (movie ? movie.averageRating : 0)
                        ? "gold"
                        : "lightgray",
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="d-flex flex-wrap">
              {movie ? movie.abstract : "genere"}
            </p>
          </div>
        </div>
      </section>
      <section className="container-sm">
        <div className="col-10 mx-auto">
          <div className="container gap-4 mb-4">
            <h2 className="mt-5">Tutte le recensioni</h2>
          </div>
          {movie && movie.reviews.length ? (
            <ul className="container">
              {movie.reviews.map((review) => (
                <li
                  className="border p-3 rounded my-2 card-review"
                  key={review.id}
                >
                  <div>
                    <strong>{review.name}</strong>
                    <div>
                      {Array.from({ length: 5 }, (_, index) => (
                        <span
                          key={index}
                          style={{
                            color: index < review.vote ? "gold" : "lightgray",
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p>{review.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <div>Nessuna recensione</div>
          )}
          <FormReview id={id} onSuccessfulReview={fetchMovie} />
        </div>
      </section>
    </div>
  );
}

export default MoviePage;
