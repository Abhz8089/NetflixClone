import React, { useState, useEffect } from "react";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import "./Banner.css";
import axios from "../../axios";

function Banner(props) {
  const [movie, setMovie] = useState();
  const [url, setUrl] = useState("");
   const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        
        let movieList = response.data.results;
        movieList.splice(4, 2);
        movieList.splice(8, 1);
        movieList.splice(11, 2);
         
        const randomIndex = Math.floor(
          Math.random() * Math.min(movieList.length, 20)
        );
        setMovie(movieList[randomIndex]);
      });
  }, []);

     const opts = {
       height: "390",
       width: "100%",
       playerVars: {
         // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
       },
     };
       const handleTrailer = (id) => {
         axios
           .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
           .then((response) => {
             if (response.data.results.length !== 0) {
             

               setUrl(response.data.results[0]);
                 setShowVideo(true);
             } else {
               console.log("array empty");
             }
           });
       };
         const handleCloseVideo = () => {
           setShowVideo(false);
         };

  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button" onClick={() => handleTrailer(movie.id)}>
            play
          </button>
          <button className="button">My list</button>
        </div>
        <h1 className="discription">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade"></div>
      {showVideo && (
        <div className="video-container">
          <Youtube opts={opts} videoId={url.key} />
          <button className="close-button" onClick={handleCloseVideo}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Banner;
