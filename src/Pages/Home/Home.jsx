import React from 'react';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner';
import HomeReview from './HomeReview';
import HomeTools from './HomeTools';

const Home = () => {
    return (
        <div>
            <HomeBanner> </HomeBanner>
            <HomeTools> </HomeTools>
            <BusinessSummary> </BusinessSummary>
            <HomeReview> </HomeReview>
        </div>
    );
};

export default Home;