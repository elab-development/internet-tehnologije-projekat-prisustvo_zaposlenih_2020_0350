import React, {useEffect, useState} from 'react';
import instanca from "../axios/instanca";
import Footer from "../komponente/Footer";
import Welcome from "../komponente/Welcome";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import {Col, Row} from "react-bootstrap";
import ICalendarLink from "react-icalendar-link";

const Dogadjaji = () => {

    const [dogadjaji, setDogadjaji] = useState([]);
    const [izabraniDogadjaj, setIzabraniDogadjaj] = useState({});
    const [prisustva, setPrisustva] = useState([]);
    const [event, setEvent] = useState({});

    useEffect(() => {
        instanca.get("/dogadjaji").then(res => {
            console.log(res);
            let podaci = res.data.podaci;

            const podaciZaKalendar = podaci.map(podatak => {

                return {
                    id: podatak.id,
                    title: podatak.naziv_dogadjaja,
                    start: new Date(podatak.vreme_pocetka),
                    end: new Date(podatak.vreme_kraja)
                };

            });

            setDogadjaji(podaciZaKalendar);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        if (izabraniDogadjaj.id !== undefined) {
            instanca.get("/pretraga-po-dogadjaju?dogadjaj_id=" + izabraniDogadjaj.id).then(res => {
                console.log(res);
                let podaci = res.data.podaci;
                setPrisustva(podaci);

                setEvent({
                    title: izabraniDogadjaj.title,
                    description: "Prisustva na dogadjaju",
                    startTime: izabraniDogadjaj.start.toUTCString(),
                    endTime: izabraniDogadjaj.end.toUTCString(),
                    location: "Online",
                    attendees: podaci.map(p => {
                        return p.user.name + " <" + p.user.email + ">";
                    })
                })

            }).catch(err => {
                console.log(err);
            });
        }else {
            console.log("Nema izabranog dogadjaja");
        }
    }, [izabraniDogadjaj]);

    const localizer = dayjsLocalizer(dayjs);

    return (
        <>
            <Welcome poruka="Dogadjaji" opis="u vasem kalendaru"/>
            <div>
                <Row className="mt-3">
                   <Col md={9}>
                       <Calendar
                           localizer={localizer}
                           events={dogadjaji}
                           startAccessor="start"
                           endAccessor="end"
                           titleAccessor="title"
                           style={{ height: 500 }}
                           onSelectEvent={event => {
                            let text = `Naziv dogadjaja: ${event.title}\nVreme pocetka: ${event.start}\nVreme kraja: ${event.end}`;

                               setIzabraniDogadjaj(event);
                               alert(text);
                           }}
                       />
                   </Col>
                    <Col md={3}>
                        <h2>Prisustva za dogadjaj {izabraniDogadjaj ? izabraniDogadjaj.title : null }</h2>
                        <ul>
                            {
                                prisustva && prisustva.map(p => {
                                    return (
                                        <li key={p.id}>
                                            {p.user.name} - {p.ocena.opis}
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <hr/>
                        {
                            event.title && (
                                <ICalendarLink event={event}>
                                    <button className="btn btn-primary">Dodaj u kalendar</button>
                                </ICalendarLink>
                            )
                        }

                    </Col>
                </Row>

            </div>

            <Row className="m-3">
                <div className="col-md-12">
                    <h2>Legenda</h2>
                    <p>
                        Klikom na dogadjaj u kalendaru možete videti više informacija.
                    </p>
                </div>

            </Row>

            <Footer/>
        </>
    );
};

export default Dogadjaji;