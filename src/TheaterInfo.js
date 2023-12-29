import TheaterStatus from "./TheaterStatus";

const cinemas = [
    {
      id: 1,
      name: "Cinema 1",
      movies: [
        { id: 1, title: "Movie A", time: "10:00", soldSeats: 20 },
        { id: 2, title: "Movie B", time: "13:00", soldSeats: 30 },
        // Add more movies and times as needed
      ],
    },
    // Add more cinema data as necessary
  ];
  
  const TheaterStatus = () => {
    return (
      <>
        <Navbar />
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
                      {`${movie.soldSeats} Sold / ${50 - movie.soldSeats} Remaining`}
                    </span>
                    {/* Replace these spans with dynamic seat info */}
                    <span className="dynamic-seats">
                      {/* Dynamic seat info here */}
                      {/* For instance, you can use a progress bar */}
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