import React, {useEffect, useState} from 'react';
import instanca from "../axios/instanca";
import Welcome from "../komponente/Welcome";
import Footer from "../komponente/Footer";
import {Form, Row} from "react-bootstrap";

const GostujuciProfesori = () => {

    const [podaci, setPodaci] = useState([]);
    const [pokaziPodatke, setPokaziPodatke] = useState(false);
    const [filtriraniPodaci, setFiltriraniPodaci] = useState([]);

    const katedere = [
        "Katedra za elektronsko poslovanje",
        "Katedra za informacione sisteme",
        "Katedra za softversko inženjerstvo"
        ];

    useEffect(() => {
        instanca.get("https://randomuser.me/api/?results=8").then(res => {
            console.log(res.data.results[0].picture.large);
            let podaci = res.data.results;
            let niz = [];
            for (let i = 0; i < podaci.length; i++) {
                let picture = podaci[i].picture.large;
                let ime = podaci[i].name.first;
                let prezime = podaci[i].name.last;
                let email = podaci[i].email;
                let katedra = katedere[Math.floor(Math.random() * katedere.length)];

                niz.push({
                    ime : ime,
                    prezime : prezime,
                    picture : picture,
                    email : email,
                    katedra : katedra
                });
            }
            setPodaci(niz);
            setFiltriraniPodaci(niz);
            setPokaziPodatke(true);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <Welcome poruka="Gostujuci" opis="profesori"/>
            <Row className="mt-3">
                <Form>
                    <Form.Group>
                        <Form.Label>Filtriraj po katedri</Form.Label>
                        <Form.Control as="select" onChange={(e) => {
                            let katedra = e.target.value;
                            if (katedra === "Sve katedre") {
                                setFiltriraniPodaci(podaci);
                            }else {
                                let filtrirani = podaci.filter(profesor => profesor.katedra === katedra);
                                setFiltriraniPodaci(filtrirani);
                            }
                        }}>
                            <option>Sve katedre</option>
                            {
                                katedere.map((katedra, index) => {
                                    return (
                                        <option key={index}>{katedra}</option>
                                    );
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Row>
            {
                pokaziPodatke && (
                        <div className="row">
                            {
                                filtriraniPodaci.map((profesor, index) => {
                                    return (
                                        <div key={index} className="col-md-3 mt-3">
                                            <div className="card">
                                                <img src={profesor.picture} alt="slika" className="img img-fluid"/>
                                                <div className="card-body">
                                                    <h3>{profesor.ime} {profesor.prezime}</h3>
                                                    <p>{profesor.email}</p>
                                                    <p>{profesor.katedra}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                )
            }
            <Footer />
        </>
    );
};

export default GostujuciProfesori;