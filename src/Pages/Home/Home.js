import React from 'react';
import AllGadgets from '../AllGadgets/AllGadgets';
import Banner from '../Banner/Banner';
import Feedback from '../Feedbacks/Feedback';
import Plan from '../Plan/Plan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1>items </h1>
            <AllGadgets></AllGadgets>
            <h1>estra</h1>
            <Feedback></Feedback>
            <Plan></Plan>
            <h1>footer</h1>
        </div>
    );
};

export default Home;