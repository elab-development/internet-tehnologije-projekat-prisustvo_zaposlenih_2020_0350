import React from 'react';
import Welcome from "../komponente/Welcome";
import coding from "../slike/coding.png";
import code from "../slike/code.png";
import web from "../slike/website-codes.png";
import PocetnaKartica from "../komponente/PocetnaKartica";
import {Row} from "react-bootstrap";
import Footer from "../komponente/Footer";

const Home = () => {

    const kartice = [
        {
           id: 1,
           slika: coding,
           naslov: "Beleženje prisustva",
           tekst: "Na našem sajtu moguće je zabeležiti prisustvo na časovima."
        },
        {
            id: 2,
            slika: code,
            naslov: "Ocene",
            tekst: "Svako prisustvo na času se računa kao ocena."
        },
        {
            id: 3,
            slika: web,
            naslov: "Admin strane",
            tekst: "Takođe, naš sajt ima i admin strane za dodavanje novih događaja i prisustva."
        }
    ];

    return (
        <>
            <Welcome poruka="Dobrodošli" opis="na naš sajt"/>
            <Row className="m-3">
            {
                kartice.map(kartica => {
                    return (
                        <div key={kartica.id} className="col-md-4">
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

export default Home;