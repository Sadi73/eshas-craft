import React from 'react';
import Banner from './Banner';
import CraftSection from './CraftSection';
import CategoriesList from './CategoriesList';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Esha's Craft | Home</title>
            </Helmet>
            
            <Banner />
            <CategoriesList />
            <CraftSection />

        </div>
    );
};

export default Homepage;