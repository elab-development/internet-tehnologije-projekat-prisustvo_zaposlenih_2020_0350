import React, {useState} from 'react';
import Welcome from "../komponente/Welcome";
import Footer from "../komponente/Footer";
import {Form} from "react-bootstrap";
import useForm from "../custom-hook/useForm";

const Kontakt = () => {

    const [porukaKorisniku, setPorukaKorisniku] = useState({});

    const {formData, handleChange} = useForm({
        email: "",
        imePrezime: "",
        poruka: ""
    });

    const posalji = (e) => {
        e.preventDefault();
        console.log(formData);
        if(formData.email === "" || formData.imePrezime === "" || formData.poruka === "") {
            setPorukaKorisniku({
                variant: "danger",
                poruka: "Morate popuniti sva polja!"
            });
        } else {
            setPorukaKorisniku({
                variant: "success",
                poruka: "Poruka uspešno poslata!"
            });
        }
    }

    return (
        <>
            <Welcome poruka="Kontakt" opis="za sva pitanja i nedoumice"/>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email adresa</Form.Label>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Unesite email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Ime i prezime</Form.Label>
                    <Form.Control name="imePrezime" onChange={handleChange} type="text" placeholder="Unesite ime i prezime" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Poruka</Form.Label>
                    <Form.Control name="poruka" onChange={handleChange} as="textarea" rows={3} placeholder="Unesite poruku" />
                </Form.Group>
                <button type="submit" onClick={posalji} className="btn btn-dark">Pošalji</button>
            </Form>
            {
                porukaKorisniku.poruka !== undefined ?
                <div className={`alert alert-${porukaKorisniku.variant} m-3`} role="alert">
                { porukaKorisniku.poruka }
                 </div>
                    :
                    null
            }
            <Footer />
        </>
    );
};

export default Kontakt;