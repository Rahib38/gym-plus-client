import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Aboutus from './Aboutus';
import NewsLatter from './NewsLatter';
import OurTeam from './OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Aboutus></Aboutus>
            <NewsLatter></NewsLatter>
            <OurTeam></OurTeam>
      </div>
    );
};

export default Home;