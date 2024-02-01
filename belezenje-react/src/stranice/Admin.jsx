import React, {useEffect, useState} from 'react';
import Welcome from "../komponente/Welcome";
import {Row, Table, Form} from "react-bootstrap";
import PocetnaKartica from "../komponente/PocetnaKartica";
import Footer from "../komponente/Footer";
import instanca from "../axios/instanca";

const Admin = () => {

    const [dogadjaji, setDogadjaji] = useState([]);
    const [prisustva, setPrisustva] = useState([]);
    const [ocene, setOcene] = useState([]);
    const [izabraniDogadjajId, setIzabraniDogadjajId] = useState(1);
    const [useri, setUseri] = useState([]);

    useEffect(() => {
        instanca.get("/dogadjaji").then(res => {
            console.log(res);
            let podaci = res.data.podaci;
            setDogadjaji(podaci);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        instanca.get("/pretraga-po-dogadjaju?dogadjaj_id=" + izabraniDogadjajId).then(res => {
            console.log(res);
            let podaci = res.data.podaci;
            setPrisustva(podaci);
        }).catch(err => {
            console.log(err);
        });
    }, [izabraniDogadjajId]);

    useEffect(() => {
        instanca.get("/ocene").then(res => {
            console.log(res);
            let podaci = res.data.podaci;
            setOcene(podaci);
        }).catch(err => {
            console.log(err);
        });
    }, []);
    

    const promeniIzabraniDogadjaj = (e) => {
        setIzabraniDogadjajId(e.target.value);
    }


    return (
        <>
            <Welcome poruka="Admin" opis="stranica"/>
            <Row className="m-3">
                <div className="col-md-8">
                    <Table hover>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User</th>
                                <th>Dogadjaj</th>
                                <th>Ocena</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            prisustva.map(p => {

                                let boja = "";

                                if(p.ocena.opis === "Prisutan") {
                                    boja = "green";
                                } else if(p.ocena.opis === "Odsutan") {
                                    boja = "red";
                                } else if(p.ocena.opis === "Zakasnio") {
                                    boja = "yellow";
                                }

                                return (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.user.name}</td>
                                        <td>{p.dogadjaj.naziv_dogadjaja}</td>
                                        <td style={
                                            {
                                                backgroundColor: boja,
                                            }
                                        }>{p.ocena.opis}</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </Table>
                </div>

                <div className="col-md-4">
                    <Form.Label>Izaberite dogadjaj</Form.Label>
                    <Form.Select onChange={promeniIzabraniDogadjaj} aria-label="Default select example">
                        {
                            dogadjaji.map(d => {
                                return (
                                    <option key={d.id} value={d.id}>{d.naziv_dogadjaja}</option>
                                );
                            })
                        }
                    </Form.Select>
                </div>
            </Row>
            <Footer/>
        </>
    );
};

export default Admin;