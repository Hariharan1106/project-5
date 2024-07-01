import { useParams } from 'react-router-dom';
import React from "react";
import Serial from "../data/Tv_db.json";
import { CustomRatingBar } from "./core/CustomRatingBar";


export function TvDetailPage() {
    const { id } = useParams();

    //filter based on id
    var filteredSerial = Serial.filter(item => item.id == id);
    console.log("Serial" + filteredSerial);

    return (
        <div class="card mb-3" style={{ maxwidth: 540 }}>
            {
                filteredSerial.map(Serial => (
                    <div className="row g-0">
                        <div className="col-md-5 ">
                            <img src={Serial.poster} width="500px" height="300px" class="img-fluid rounded-start" alt="..." />
                            <br />

                        </div>
                        <div className="col-md-4">
                            <div className="card-body ">
                                <h5 className="card-title">{Serial.title}</h5>
                                <p className="card-text">{Serial.story} </p>
                                <p className="card-text">{Serial.genre}</p>
                                {< CustomRatingBar rating={Serial.rating} />}
                                <a className="btn-success btn" href='#'>{Serial.id}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}




