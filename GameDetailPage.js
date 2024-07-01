import { useParams } from "react-router-dom";
import React from "react";
import Game from "../data/Sports_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";
 


export function GameDetailPage() {
    const {id} =useParams();
       
    //filter based on id
    var filteredGame = Game.filter(item => item.id == id);
    console.log("Game"+filteredGame);
   
    return (
        <div class="card mb-3" style={{maxwidth: 540 }}>
            {
                filteredGame.map(Game => (
                    <div class="row g-0">
                      <div class="col-md-5 ">
                            <img src={Game.poster} width="500px" height="300px" class="img-fluid rounded-start" alt="..." />
                              <br/>
                          
                            </div>
                            <div className="col-md-4">
                            <div className="card-body ">
                            <h5 className="card-title">{Game.title}</h5>
                                 {< CustomRatingBar  rating={Game.rating} />}
                                <a className="btn-success btn" href='#'>{Game.id}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
