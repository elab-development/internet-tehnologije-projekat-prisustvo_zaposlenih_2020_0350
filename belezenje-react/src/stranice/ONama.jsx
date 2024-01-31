import React from 'react';
import Welcome from "../komponente/Welcome";
import Footer from "../komponente/Footer";
import nina from "../slike/nina.jpeg";
import mina from "../slike/Mina.png";
import {Row} from "react-bootstrap";
import PocetnaKartica from "../komponente/PocetnaKartica";

const ONama = () => {

    const onama = [
        {
            id: 1,
            naslov: "Mina Zavišić",
            tekst: "Mina je studentkinja četvrte godine FONa, smer ISIT. Voli da programira i da se bavi sportom.",
            slika: mina
        },
        {
            id: 2,
            naslov: "Nina Živković",
            tekst: "Nina je studentkinja četvrte godine FONa, smer ISIT. Voli da isprobava novu hranu i čita modne časopise.",
            slika: nina
        }
    ];

    return (
        <>
            <Welcome poruka="Nešto" opis="o nama"/>
                <Row className="m-3">
                    {
                        onama.map(kartica => {
                            return (
                                <div key={kartica.id} className="col-md-6">
                                    <PocetnaKartica slika={kartica.slika} naslov={kartica.naslov} tekst={kartica.tekst}/>
                                </div>
                            );
                        })
                    }
                </Row>
            <Footer />
        </>
    );
};

export default ONama;