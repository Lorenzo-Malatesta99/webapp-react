import { Link } from "react-router-dom";

function FilmCard({ film }) {
  const { id, title, director, genre, release_year } = film;
  const formattedTitle = title.replace(/\s+/g, "_").toLowerCase();
  const imageUrl = `http://localhost:3000/${formattedTitle}.jpg`;

  return (
    <div className="film-card">
      <img className="film-card-image" src={imageUrl} alt={`${title} poster`} />
      <div className="film-details d-flex justify-content-between flex-column">
        <div>
          <h2>{title}</h2>
          <p>Regista: {director}</p>
          <p>Genere: {genre}</p>
          <p>Del {release_year}</p>
        </div>
        <div>
          <Link className="custom-btn" to={`/films/${id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilmCard;
