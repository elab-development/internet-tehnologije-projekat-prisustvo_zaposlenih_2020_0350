import React, {useState} from 'react';
import Welcome from "../komponente/Welcome";
import {Form} from "react-bootstrap";
import Footer from "../komponente/Footer";
import useForm from "../custom-hook/useForm";
import instanca from "../axios/instanca";

const Registracija = () => {

    const {formData, handleChange} = useForm({
        email: "",
        password: "",
        name: ""
    });

    const [porukaKorisniku, setPorukaKorisniku] = useState({});

    const registruj = (e) => {
        e.preventDefault();

        instanca.post("/register", formData).then(res => {
            console.log(res);
            setPorukaKorisniku({
                variant: "success",
                poruka: "Uspešno ste se registrovali!"
            });
        }).catch(err => {
            console.log(err);
            setPorukaKorisniku({
                variant: "danger",
                poruka: "Došlo je do greške!"
            });
        });
    }

    return (
        <>
            <Welcome poruka="Registracija" opis="forma"/>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Ime i prezime</Form.Label>
                    <Form.Control name="name" onChange={handleChange} type="text" placeholder="Unesite ime i prezime" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email adresa</Form.Label>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Unesite email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Unesite lozinku" />
                </Form.Group>
                <button type="submit" onClick={registruj} className="btn btn-dark">Registruj se</button>
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

export default Registracija;