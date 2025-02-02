import React, { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";


function HomePage() {
  const { setIsLoading } = useContext(GlobalContext);
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState("");

  function fetchFilms() {

    setIsLoading(true);

    axios
      .get("http://localhost:3000/api/films", {
        params: { search: search },
      })
      .then((response) => {
        
        setFilms(response.data);
      })
      
      .catch((err) => {
        console.error("Errore nella richiesta:", err);
      })
      .finally(() => {  setIsLoading(false); });
    
  }

  function searchFilms(e) {
    e.preventDefault();
    fetchFilms();
  }

  useEffect(() => {
    fetchFilms();
  }, [search]);

  return (
    <>
      <section className="container d-flex flex-wrap justify-content-between align-items-center py-3">
        <div>
          <h3>Cerca qui i tuoi film preferiti</h3>
        </div>
        <div className="">
          <form onSubmit={searchFilms} className="d-flex gap-3 my-3">
            <input
              className="form-control rounded-lg py-2 px-3"
              type="text"
              placeholder="Cerca film"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn brand-cl-bg py-2 px-3">
              Cerca
            </button>
          </form>
        </div>
      </section>
      <section>
        {films.length ? (
          <ul className="d-flex flex-wrap">
            {films.map((film) => (
              <li key={film.id}>
                <FilmCard film={film} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="italic text-center">Nessun risultato</div>
        )}
      </section>
    </>
  );
}
export default HomePage;
