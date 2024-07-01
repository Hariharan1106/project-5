import {useParams} from 'react-router-dom';
import React from "react";
import Movies from "../data/movies_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";

export function DetailHome() {
    const {id} =useParams();
       
    //filter based on id
    var filteredMovie = Movies.filter(item => item.id == id);
    console.log("Movie"+filteredMovie);
   
    return (
        <div class="card mb-3" style={{maxwidth: 540 }}>
            {
                filteredMovie.map(movie => (
                    <div class="row ">
                      <div class="col-md-5">
                            <img src={movie.poster} width="500px" height="300px" class="img-fluid rounded-start" alt="..." />
                              <br/>
                          
                            </div>
                            <div className="col-md-4">
                            <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                                 <p className="card-text">{movie.story} </p>
                                 <p class="card-text">{movie.genre}</p> 
                                {< CustomRatingBar  rating={movie.rating} />}
                                <a className="btn-success btn" href='#'>{movie.id}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}




