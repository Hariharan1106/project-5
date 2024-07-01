import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Movies from "../data/movies_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";

export function MoviesHome() {
    const [movies, setMovies] = useState([]);

    console.log(movies);

    useEffect(() => {
        setMovies(Movies);
    }, []);


    //JSON parsing - filtering

    //filter based on id
    var filter_movie = Movies.filter(item => item.id == 3);
    console.log(filter_movie);

    //filter based on rating
    var rating_movie = Movies.filter(item => item.rating == 5);
    console.log(rating_movie);

    Movies.forEach(element => {
      console.log(element.title);
    });
    
    Movies.forEach(element => {
      console.log(element.title);

      var item = element.genre;
      console.log(item);
      /*item.forEach(gen => {
        console.log("Genre : "+gen);
      });*/
    });

    //var genres = Movies.filter( genre => genre.genre.forEsach( item => item=="Romance"))
  
    //Movies.filter(item => item.genres);
    //console.log(genres);

    //  .filter(gen => gen = "Romance"));
    //console.log(rating_movie);

    return (
      
        <div className="row row-cols-1 row-cols-md-3">
        {
        movies.map(movie => (
            <div className="col">
              <div className="card h-100">
                <img src={movie.poster} width="300px" height="275px" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  {/* <p className="card-text">{movie.story}
                  </p> */}
                  {< CustomRatingBar rating={movie.rating} />}
                  <Link to={"/movie/"+movie.id}>Watch Movie</Link>
                </div>
              </div>
            </div>
            ))
        }
        </div>
    )
}

export default MoviesHome;