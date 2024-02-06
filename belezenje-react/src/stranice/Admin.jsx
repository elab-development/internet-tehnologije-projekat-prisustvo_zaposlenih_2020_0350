import React, {useEffect, useState} from 'react';
import Welcome from "../komponente/Welcome";
import {Row, Table, Form, Col} from "react-bootstrap";
import Footer from "../komponente/Footer";
import instanca from "../axios/instanca";
import { Chart } from "react-google-charts";


const Admin = () => {

    const [dogadjaji, setDogadjaji] = useState([]);
    const [prisustva, setPrisustva] = useState([]);
    const [ocene, setOcene] = useState([]);
    const [izabraniDogadjajId, setIzabraniDogadjajId] = useState(1);
    const [useri, setUseri] = useState([]);
    const [data, setData] = useState([]);
    const [svaPrisustva, setSvaPrisustva] = useState([]);
    const [brojDugmica, setBrojDugmica] = useState(null);
    const [nizDugmica, setNizDugmica] = useState([]);
    const [page, setPage] = useState(1);
    const [paginiranaPristustva, setPaginiranaPristustva] = useState([]);

    const poStrani = 5;

    const options = {
        title: "Prisustva po oceni",
        pieHole: 0.4,
        is3D: true
    };

    useEffect(() => {
        instanca.get("/prisustva").then(res => {
            console.log(res);
            let podaci = res.data.podaci;
            let brojDugmica = Math.ceil(podaci.length / poStrani);
            setBrojDugmica(brojDugmica);
            let niz = [];
            for (let i = 1; i <= brojDugmica; i++) {
                niz.push(i);
            }
            setNizDugmica(niz);
            console.log('nizDugmica', niz);
            setSvaPrisustva(podaci);
            setPaginiranaPristustva(podaci.slice(0, poStrani));
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        instanca.get("/ocena-ukupno").then(res => {
            console.log(res);
            console.log('podaci', res.data.podaci)
            let podaci = res.data.podaci;

            let data = [
                ["Ocena", "Broj prisustava"]
            ];

            for (let i = 0; i < podaci.length; i++) {
                data.push([podaci[i].oznaka, podaci[i].broj_prisustava]);
            }

            setData(data);
        }).catch(err => {
            console.log(err);
        });
    }, []);


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

    useEffect(() => {
        instanca.get("/paginacija?po_strani=" + poStrani +"&page=" + page).then(res => {
            console.log(res);
            let podaci = res.data.podaci;
            setPaginiranaPristustva(podaci);
        }).catch(err => {
            console.log(err);
        });
    }, [page]);


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

            <Row className="m-3">
                {
                    data && (
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"100%"}
                            height={"400px"}
                        />
                    )
                }
            </Row>
            <Row>
                <Col>

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
                    paginiranaPristustva && paginiranaPristustva.map(p => {
                        return (
                                <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.user.name}</td>
                                <td>{p.dogadjaj.naziv_dogadjaja}</td>
                                <td>{p.ocena.opis}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
                </Table>
                </Col>
            </Row>

            <Row>
                <Col>
                    <button onClick={() => {
                        let n = page - 1;
                        setPage(n);
                    }} className="btn btn-primary m-1">Prethodna stranica
                    </button>
                    {
                        nizDugmica && nizDugmica.map(n => {
                            return (
                                <button key={n} onClick={() => {
                                    setPage(n);
                                }} className="btn btn-primary m-1">{n}</button>
                            );
                        })
                    }

                    <button onClick={() => {
                        let n = page + 1;
                        setPage(n);
                    }} className="btn btn-primary m-1">Sledeca stranica
                    </button>
                </Col>
            </Row>
            <Footer/>
        </>
    );
};

export default Admin;