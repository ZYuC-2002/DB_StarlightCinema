import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import './movieList.css'
import { Link } from 'react-router-dom';
import Navbar from "./upperlistuser";
import Cookies from "universal-cookie";
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
    const [search, setSearch] = useState('');
    const [selectedMovieTitle, setSelectedMovieTitle] = useState('');
    const cookies=new Cookies();
    const navigate=useNavigate();
    const [movie1_name,setMovie1_name]=useState("NAPOLEN");
    const [movie1_poster,setMovie1_poster]=useState("/napolen.jpg");
    const [movie2_name,setMovie2_name]=useState("飢餓遊戲：鳴鳥與游蛇之歌");
    const [movie2_poster,setMovie2_poster]=useState("/hungergame.jpg");
    const [movie3_name,setMovie3_name]=useState("車頂上的玄天上帝");
    const [movie3_poster,setMovie3_poster]=useState("/bewithme.jpg");
    const [movie4_name,setMovie4_name]=useState("驚奇隊長 2");
    const [movie4_poster,setMovie4_poster]=useState("/themarvels.jpg");
    const [movie5_name,setMovie5_name]=useState("蒼鷺與少年");
    const [movie5_poster,setMovie5_poster]=useState("/theboyandtheheron.jpg");
    const [movie6_name,setMovie6_name]=useState("魔髮精靈：樂團在一起");
    const [movie6_poster,setMovie6_poster]=useState("/trollsbamdtogether.jpg");
    const [movie7_name,setMovie7_name]=useState("數碼寶貝 02 THE BEGINNING");
    const [movie7_poster,setMovie7_poster]=useState("/digimonadventure2.jpg");
    const [movie8_name,setMovie8_name]=useState("RENAISSANCE: A FILM BY BEYONCÉ");
    const [movie8_poster,setMovie8_poster]=useState("/beyonce.jpg");
    const [movie9_name,setMovie9_name]=useState("B-SEVENTEEN TOUR FOLLOW TO JAPAN");
    const [movie9_poster,setMovie9_poster]=useState("/seventeen.jpg");
    const [movie10_name,setMovie10_name]=useState("NCT NATION : To The World in Cinemas");
    const [movie10_poster,setMovie10_poster]=useState("/nct.jpg");
    const movies = [
      {
        id: 1,
        title: movie1_name,
        poster: movie1_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 2,
        title: movie2_name,
        poster: movie2_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 3,
        title: movie3_name,
        poster: movie3_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 4,
        title: movie4_name,
        poster: movie4_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 5,
        title: movie5_name,
        poster: movie5_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 6,
        title: movie6_name,
        poster: movie6_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 7,
        title: movie7_name,
        poster: movie7_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 8,
        title: movie8_name,
        poster: movie8_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 9,
        title: movie9_name,
        poster: movie9_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
      {
        id: 10,
        title: movie10_name,
        poster: movie10_poster,
        link: "/MovieInfo",
        types: ["2D", "IMAX", "3D"]
      },
    ];

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://192.168.10.101:5000/get_all_movies_intro");
          const responseData = await response.json();
          setMovie1_name(responseData[0]['name']);
          setMovie1_poster(responseData[0]['upright_poster']);
          setMovie2_name(responseData[1]['name']);
          setMovie2_poster(responseData[1]['upright_poster']);
          setMovie3_name(responseData[2]['name']);
          setMovie3_poster(responseData[2]['upright_poster']);
          setMovie4_name(responseData[3]['name']);
          setMovie4_poster(responseData[3]['upright_poster']);
          setMovie5_name(responseData[4]['name']);
          setMovie5_poster(responseData[4]['upright_poster']);
          setMovie6_name(responseData[5]['name']);
          setMovie6_poster(responseData[5]['upright_poster']);
          setMovie7_name(responseData[6]['name']);
          setMovie7_poster(responseData[6]['upright_poster']);
          setMovie8_name(responseData[7]['name']);
          setMovie8_poster(responseData[7]['upright_poster']);
          setMovie9_name(responseData[8]['name']);
          setMovie9_poster(responseData[8]['upright_poster']);
          setMovie10_name(responseData[9]['name']);
          setMovie10_poster(responseData[9]['upright_poster']);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);

    const handleMovieClick = (title,img) => {
      // Store the selected movie title in cookies
      cookies.set('selectedMovieTitle', title, { path: '/' });
      cookies.set('selectedMoviePoster', img, { path: '/' });
      setSelectedMovieTitle(title);
      navigate('/MovieInfo');
    };

    useEffect(() => {
        cookies.set('search',search,{path:'/'});
        console.log(cookies)
    },[search])

  return (
  <>
      <Navbar setSearch={setSearch}/>
      <div className='blank'/>
      <div className="movie-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
              <div className="movie-poster">
                <img src={movie.poster} alt={movie.title} onClick={() => handleMovieClick(movie.title,movie.poster)}/>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-types">
                    {movie.types.map((type, index) => (
                      <span key={index}>{type}</span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;


