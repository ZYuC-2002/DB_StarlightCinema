import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import './movieList.css'
import { Link } from 'react-router-dom';
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";


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
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 3,
    title: "車頂上的玄天上帝",
    poster: "/bewithme.jpg",
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 4,
    title: "驚奇隊長 2",
    poster: "/themarvels.jpg",
    link: "/MovieInfo",
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
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 7,
    title: "數碼寶貝 02 THE BEGINNING",
    poster: "/digimonadventure2.jpg",
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 8,
    title: "RENAISSANCE: A FILM BY BEYONCÉ",
    poster: "/beyonce.jpg",
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 9,
    title: "B-SEVENTEEN TOUR FOLLOW TO JAPAN",
    poster: "/seventeen.jpg",
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
  {
    id: 10,
    title: "NCT NATION : To The World in Cinemas",
    poster: "/nct.jpg",
    link: "/MovieInfo",
    types: ["數位", "IMAX", "直播"]
  },
];


const MovieList = () => {
    const [search, setSearch] = useState('');
    const cookies=new Cookies();

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search, cookies])

  return (
  <>
      <Navbar setSearch={setSearch}/>
      <div className='blank'/>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;


