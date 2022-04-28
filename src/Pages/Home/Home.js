import React from 'react';
import AllGadgets from '../AllGadgets/AllGadgets';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>items </h1>
            <AllGadgets></AllGadgets>
            <h1>estra</h1>
            <h1>extra</h1>
            <h1>footer</h1>
        </div>
    );
};

export default Home;