import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Game from "../data/Sports_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";

function GameHome() {
  const [game, setGame] = useState([]);

  // console.log(serial);

  useEffect(() => {
    setGame(Game);
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3">
    {
    game.map(Game => (
        <div className="col">
          <div className="card h-100">
            <img src={Game.poster} width="290px" height="275px" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{Game.title}</h5>
              {< CustomRatingBar rating={Game.rating} />}
                  <Link to={"/Game/"+Game.id}>Watch Game</Link>
            </div>
          </div>
        </div>
        ))
    }
    </div>
)
}
export default GameHome;



