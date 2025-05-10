import React, { useState, useEffect } from "react";
import axios from "axios";
import imdbIds from "../data/imdbIds";
import apiKey from "../data/apiKey";

const VideoDome = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await Promise.all(
        imdbIds.map(async (imdbId) => {
          const { data } = await axios.get(
            `https://www.omdbapi.com/?i=${imdbId}&apikey=${apiKey}`,
            { headers: null }
          );
          return data;
        })
      );
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchedMovie(null);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(
      `https://www.omdbapi.com/?t=${searchQuery}&apikey=${apiKey}`,
      { headers: null }
    );
    setSearchedMovie(data);
    setSearchQuery("");
  };

  return (
    <div className="video-page">
      <img id="vd-img" src="/images/videoDomeHeader.png" alt="" />
      <div className="dennis-picks">
        <div className="owner-profile">
          <img className="owner-pic" src="/images/dennis.png" alt="" />
          <br />
          <span>Dennis Lerpiss</span>
          <br />
          <span id="profile-qoute">
            Sadly next month Pawnee Video Dome will be closing its doors,
            forever. For those of you that have attended our screenings, I want
            to thank you for your patronage. Although, I wish you would have
            rented more movies.
          </span>
        </div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <div className="card h-50">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lower-div">
        <form className="mb-4" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
        {searchedMovie && (
          <div>
            <div>
              <div className="card h-100 searched">
                <img
                  src={searchedMovie.Poster}
                  alt={searchedMovie.Title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{searchedMovie.Title}</h5>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDome;
