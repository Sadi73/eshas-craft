import React from 'react';
import Banner from './Banner';
import CraftSection from './CraftSection';
import CategoriesList from './CategoriesList';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <CategoriesList/>
            <CraftSection/>
            <Footer/>
        </div>
    );
};

export default Homepage;