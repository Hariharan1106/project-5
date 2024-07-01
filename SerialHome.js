import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Serial from "../data/Tv_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";


function SerialHome() {
  const [serial, setSerial] = useState([]);


  useEffect(() => {
    setSerial(Serial);
  }, []);

       //filter based on id
    var filter_serial = Serial.filter(item => item.id == 7);
    console.log(filter_serial);


  return (
    <div className="row row-cols-1 row-cols-md-3">
    {
    serial.map(Serial => (
        <div className="col">
          <div className="card h-100">
            <img src={Serial.poster} width="300px" height="275px" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{Serial.title}</h5>
              {< CustomRatingBar rating={Serial.rating} />}
                  <Link to={"/Serial/"+Serial.id}>Watch Tv</Link>
            </div>
          </div>
        </div>
        ))
    }
    </div>
)
}
export default SerialHome;



