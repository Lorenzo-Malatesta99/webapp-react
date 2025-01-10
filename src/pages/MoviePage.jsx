import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const rating = movie && typeof movie.rating === 'number' ? movie.rating : 0;
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
      <button className="btn brand-cl-bg py-2 px-3 m-3 sticky-button">
        <NavLink to="/">Back</NavLink>
      </button>
      <section>
        <div className="container d-flex justify-content-center align-items-center py-4">
          <img className="detail-image" src={imageUrl} alt="poster" />
          <div className="mx-3">
            <h1>{movie ? movie.title : "Titolo film"}</h1>
            <p>{movie ? movie.director : "director"}</p>
            <p>{movie ? movie.genre : "genere"}</p>
            <div>
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
      <section>
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
        <div className="container">
          <div>
            <div className="px-2 pt-5 pb-2">
              <strong>Scrivi anche tu una recensione</strong>
            </div>
          </div>
          <div className="p-2">
            <form>
              <p className="form">
                <label className="form-label" htmlFor="name"></label>
                <input className="form" type="text" placeholder="Nome" name="name" id="name" />
              </p>
              <p>
                <label htmlFor="vote">Rating:</label>
                <select name="vote" id="vote">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
              <p>
                <label className="form-label" htmlFor="text"></label>
                <textarea
                  rows="4"
                  name="text"
                  id="text"
                  placeholder="Scrivi la tua recensione"
                  className="form-control"
                ></textarea>
              </p>
              <button className="btn brand-cl-bg my-3">Invia</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoviePage;
