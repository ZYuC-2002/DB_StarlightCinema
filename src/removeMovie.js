import React, { useState } from 'react';
import './App.css';
import './removeMovie.css';
import { Link } from 'react-router-dom';
import Navbaremployee from './upperlistemployee';

const movies = [
    {
      id: 1,
      title: "NAPOLEN",
      poster: "/napolen.jpg",
      link: "/MovieInfo",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 2,
      title: "飢餓遊戲：鳴鳥與游蛇之歌",
      poster: "/hungergame.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 3,
      title: "車頂上的玄天上帝",
      poster: "/bewithme.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 4,
      title: "驚奇隊長 2",
      poster: "/themarvels.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 5,
      title: "蒼鷺與少年",
      poster: "/theboyandtheheron.jpg",
      link: "/MovieInfo",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 6,
      title: "魔髮精靈：樂團在一起",
      poster: "/trollsbamdtogether.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 7,
      title: "數碼寶貝 02 THE BEGINNING",
      poster: "/digimonadventure2.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 8,
      title: "RENAISSANCE: A FILM BY BEYONCÉ",
      poster: "/beyonce.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 9,
      title: "B-SEVENTEEN TOUR FOLLOW TO JAPAN",
      poster: "/seventeen.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
    {
      id: 10,
      title: "NCT NATION : To The World in Cinemas",
      poster: "/nct.jpg",
      link: "/",
      types: ["數位", "IMAX", "直播"]
    },
  ];

const RemoveMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSelectMovie = (id) => {
    if (selectedMovies.includes(id)) {
      setSelectedMovies(selectedMovies.filter((movieId) => movieId !== id));
    } else {
      setSelectedMovies([...selectedMovies, id]);
    }
  };

  const handleRemoveMovies = () => {
    const updatedMovieList = movies.filter((movie) => !selectedMovies.includes(movie.id));
    // Assuming you have a function to update the movie list in your application state
    // Replace the following line with the appropriate function to update the movie list
    // updateMovieList(updatedMovieList);
    // For demonstration, logging the updated movie list to console
    console.log(updatedMovieList);
    setSelectedMovies([]);
  };

  return (
    <>
      <Navbaremployee />
      <div className='blank'/>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedMovies.includes(movie.id)}
                onChange={() => handleSelectMovie(movie.id)}
              />
              <Link to={movie.link}>
                <div className="movie-poster">
                  <img src={movie.poster} alt={movie.title} />
                  <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="movie-types">
                      {movie.types.map((type, index) => (
                        <span key={index}>{type}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </label>
          </div>
        ))}
      </div>
      <Link to={'/CenteredText'}>
        <div className="remove-button">
          <button onClick={handleRemoveMovies}>下架</button>
        </div>
      </Link>

    </>
  );
};

export default RemoveMovie;
