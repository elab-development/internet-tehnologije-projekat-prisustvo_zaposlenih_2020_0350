import React, {useEffect, useState} from 'react';
import instanca from "../axios/instanca";
import Footer from "../komponente/Footer";
import Welcome from "../komponente/Welcome";
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const Dogadjaji = () => {

    const [dogadjaji, setDogadjaji] = useState([]);

    useEffect(() => {
        instanca.get("/dogadjaji").then(res => {
            console.log(res);
            let podaci = res.data.podaci;

            const podaciZaKalendar = podaci.map(podatak => {

                return {
                    id: podatak.id_dogadjaja,
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

    const localizer = dayjsLocalizer(dayjs)

    return (
        <>
            <Welcome poruka="Dogadjaji" opis="u vasem kalendaru"/>
            <div>
                <Calendar
                    localizer={localizer}
                    events={dogadjaji}
                    startAccessor="start"
                    endAccessor="end"
                    titleAccessor="title"
                    style={{ height: 500 }}
                    onSelectEvent={event => {
                        let text = `Naziv dogadjaja: ${event.title}\nVreme pocetka: ${event.start}\nVreme kraja: ${event.end}`;
                        alert(text);
                    }}
                />
            </div>

            <Footer />
        </>
    );
};

export default Dogadjaji;