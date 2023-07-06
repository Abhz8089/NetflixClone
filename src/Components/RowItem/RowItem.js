import React,{useEffect,useState} from 'react';
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";
import './RowItem.css';
import axios from '../../axios'
function RowItem(props) {
  const [movies, setMovies] = useState([])
  const [url, setUrl] = useState('')
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios
      .get(
      props.url
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {});  
  }, [])

   const opts = {
     height: "390",
     width: "100%",
     playerVars: {
       // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
     },
   };
  const handleTrailer=(id)=>{
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!==0){
      
      
      setUrl(response.data.results[0]);
        setShowVideo(true);
    }else{
      console.log('array empty')
    }
   })
  }
  
      const handleCloseVideo = () => {
        setShowVideo(false);
      };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            onClick={() => handleTrailer(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageUrl + obj.poster_path}`}
            alt="Card"
          />
        ))}
      </div>
      {showVideo && (
        <div className="rowVideo">
          {url && <Youtube opts={opts} videoId={url.key} />}
          <button className="close-button" onClick={handleCloseVideo}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default RowItem;