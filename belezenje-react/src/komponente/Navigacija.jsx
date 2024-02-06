import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {

    const token = window.sessionStorage.getItem('token');

    const ulogovan = token !== null;

    const user = JSON.parse(window.sessionStorage.getItem('user'));
    let isAdmin = false;

    if (user !== null) {
        isAdmin = user.rola === 'admin';
    }

    const logout = () => {
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('user');
        window.location.href = '/';
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Evidencija prisustva</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pocetna</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/profesori">Profesori</Nav.Link>
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                        {
                            ulogovan ?
                                <Nav.Link href="/dogadjaji">Događaji</Nav.Link>
                                :
                                null
                        }
                        {
                            isAdmin ?
                                <Nav.Link href="/admin">Admin</Nav.Link>
                                :
                                null
                        }
                        {
                            ulogovan ?
                                <Nav.Link onClick={logout} href="#">Logout</Nav.Link>
                                :
                                null
                        }
                        {
                            !ulogovan ?
                                <Nav.Link href="/login">Login</Nav.Link>
                                :
                                null
                        }
                        {
                            !ulogovan ?
                                <Nav.Link href="/registracija">Registracija</Nav.Link>
                                :
                                null
                        }

                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;