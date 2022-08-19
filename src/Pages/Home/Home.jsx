import React from 'react';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner';
import HomeTools from './HomeTools';

const Home = () => {
    return (
        <div>
            <HomeBanner> </HomeBanner>
            <HomeTools> </HomeTools>
            <BusinessSummary> </BusinessSummary>
        </div>
    );
};

export default Home;