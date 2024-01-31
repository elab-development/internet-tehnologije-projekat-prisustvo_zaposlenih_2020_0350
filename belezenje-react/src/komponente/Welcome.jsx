import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => {
    return (
        <>
            <div className="welcome text-center">
                <h1>{ props.poruka }</h1>
                <p>{ props.opis }</p>
            </div>
        </>
    );
};

Welcome.propTypes = {
    poruka: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired
};

export default Welcome;