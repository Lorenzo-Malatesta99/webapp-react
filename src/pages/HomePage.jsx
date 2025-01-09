import React, { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";

function HomePage() {
    const [films, setFilms] = useState([]);
    const [search, setSearch] = useState("");

    function fetchFilms() {
        axios
            .get("http://localhost:3000/api/films", {
                params: {
                    search: search,
                },
            })
            .then((response) => {
                setFilms(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
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
            <section>
                <div className="container py-6 d-flex justify-content-between align-items-end">
                    <form onSubmit={searchFilms} className="d-flex gap-3">
                        <input
                            className="form-control rounded-lg py-2 px-3"
                            type="text"
                            placeholder="Cerca film"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="btn btn-primary rounded-lg py-2 px-3">Cerca</button>
                    </form>
                </div>
            </section>
            <section>
                {films.length ? (
                    <ul className="container d-flex flex-wrap">
                        {films.map((film) => (
                            <li key={film.id} className="col">
                                <FilmCard film={film} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="italic text-center text-muted">Nessun risultato</div>
                )}
            </section>
        </>
    );
}
export default HomePage;
