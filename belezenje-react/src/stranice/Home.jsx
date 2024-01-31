import React from 'react';
import Welcome from "../komponente/Welcome";

const Home = () => {
    return (
        <div>
            <Welcome poruka="Dobrodošli" opis="na naš sajt"/>
        </div>
    );
};

export default Home;