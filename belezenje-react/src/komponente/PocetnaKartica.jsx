import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap";

const PocetnaKartica = props => {

    const {slika, naslov, tekst} = props;

    return (
        <>
            <Card>
                <Card.Img variant="top" src={slika} />
                <Card.Body>
                    <Card.Title>{naslov}</Card.Title>
                    <Card.Text>
                        {tekst}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

PocetnaKartica.propTypes = {
    slika: PropTypes.string.isRequired,
    naslov: PropTypes.string.isRequired,
    tekst: PropTypes.string.isRequired
};

export default PocetnaKartica;