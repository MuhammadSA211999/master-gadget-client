import React from 'react';
import AllGadgets from '../AllGadgets/AllGadgets';
import Banner from '../Banner/Banner';
import Feedback from '../Feedbacks/Feedback';
import Footer from '../Footer/Footer';
import Plan from '../Plan/Plan';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllGadgets></AllGadgets>
            <Feedback></Feedback>
            <Plan></Plan>
            <Footer></Footer>
        </div>
    );
};

export default Home;