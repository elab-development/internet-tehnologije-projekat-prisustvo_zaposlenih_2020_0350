import React, {useEffect, useState} from 'react';
import {Row} from "react-bootstrap";
import instanca from "../axios/instanca";

const RekliSuONama = () => {

    const [podaci, setPodaci] = useState({});
    const [pokaziPodatke, setPokaziPodatke] = useState(false);

    useEffect(() => {
        instanca.get("https://randomuser.me/api/").then(res => {
            console.log(res.data.results[0].picture.large);
            let podaci = res.data.results[0];
            setPodaci(podaci);
            setPokaziPodatke(true);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            {
                pokaziPodatke && (
                    <Row>
                        <div className="col-md-2">
                            <img className="img img-fluid" src={podaci.picture.large} alt="slika" />
                        </div>

                        <div className="col-md-10">
                            <h1>{podaci.name.title} {podaci.name.first} {podaci.name.last}</h1>
                            <p>{podaci.email}</p>
                            <p>
                                Ovaj sajt je odličan! Sve je super, a posebno mi se svidele mogućnosti praćenja prisustva na časovima i ocenjivanja.
                            </p>
                        </div>
                    </Row>
                )
            }
        </>
    );
};

export default RekliSuONama;