import React, {useState} from 'react';
import Welcome from "../komponente/Welcome";
import {Form} from "react-bootstrap";
import Footer from "../komponente/Footer";
import useForm from "../custom-hook/useForm";
import instanca from "../axios/instanca";

const Login = () => {

    const {formData, handleChange} = useForm({
        email: "",
        password: ""
    });

    const [porukaKorisniku, setPorukaKorisniku] = useState({});

    const login = (e) => {
        e.preventDefault();

        instanca.post("/login", formData).then(res => {
            console.log(res);
            const user = res.data.user;
            const token = res.data.token;

            window.sessionStorage.setItem('token', token);
            window.sessionStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/';

        }).catch(err => {
            console.log(err);
            setPorukaKorisniku({
                variant: "danger",
                poruka: "Pogrešan email ili lozinka!"
            });
        });
    }

    return (
        <>
            <Welcome poruka="Login" opis="forma"/>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email adresa</Form.Label>
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Unesite email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Unesite lozinku" />
                </Form.Group>
                <button type="submit" onClick={login} className="btn btn-dark">Login</button>
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

export default Login;