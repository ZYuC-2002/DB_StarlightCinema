import React, {useState, useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./TheaterStatus.css";
import "./App.css"
// import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Navbaremployee from "./upperlistemployee";


const cinemas = [
  {
    id: 1,
    name: "Theater 1",
    movies: [
      { id: 1, title: "電影A  ", time: "10:00  ", 剩餘座位數: 20 },
      { id: 2, title: "電影B  ", time: "13:00  ", 剩餘座位數: 30 },
      // Add more movies and times as needed
    ],
  },
  {
    id: 2,
    name: "Theater 2",
    movies: [
      { id: 1, title: "電影A  ", time: "10:00  ", 剩餘座位數: 20 },
      { id: 2, title: "電影B  ", time: "13:00  ", 剩餘座位數: 30 },
      // Add more movies and times as needed
    ],
  },  
  {
    id: 3,
    name: "Theater 3",
    movies: [
      { id: 1, title: "電影A  ", time: "10:00  ", 剩餘座位數: 20 },
      { id: 2, title: "電影B  ", time: "13:00  ", 剩餘座位數: 30 },
      // Add more movies and times as needed
    ],
  },
  {
    id: 4,
    name: "Theater 4",
    movies: [
      { id: 1, title: "電影A  ", time: "10:00  ", 剩餘座位數: 20 },
      { id: 2, title: "電影B  ", time: "13:00  ", 剩餘座位數: 30 },
      // Add more movies and times as needed
    ],
  },
  {
    id: 5,
    name: "Theater 5",
    movies: [
      { id: 1, title: "電影A  ", time: "10:00  ", 剩餘座位數: 20 },
      { id: 2, title: "電影B  ", time: "13:00  ", 剩餘座位數: 30 },
      // Add more movies and times as needed
    ],
  }

];
const TheaterStatus = () => {
  return (
    <>
      <Navbaremployee />
      <div className='blank'/>
      <div className="cinema-container">
        {cinemas.map((cinema) => (
          <div className="cinema-card" key={cinema.id}>
            <h2>{cinema.name}</h2>
            <div className="movie-showtimes">
              {cinema.movies.map((movie) => (
                <div className="movie-time" key={movie.id}>
                  <span className="movie-title">{movie.title}</span>
                  <span className="time">{movie.time}</span>
                  <span className="seats-info">
                    {`已售 ${movie.剩餘座位數}  / 剩餘 ${50 - movie.剩餘座位數} `}
                  </span>
                  <span className="dynamic-seats">
                    {/* 動態座位資訊 */}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TheaterStatus;