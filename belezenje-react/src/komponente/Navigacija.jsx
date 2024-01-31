import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const Navigacija = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Evidencija prisustva</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pocetna</Nav.Link>
                        <Nav.Link href="/onama">O nama</Nav.Link>
                        <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigacija;