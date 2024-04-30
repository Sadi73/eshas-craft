import React from 'react';
import Banner from './Banner';
import CraftSection from './CraftSection';
import CategoriesList from './CategoriesList';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <CategoriesList/>
            <CraftSection/>
          
        </div>
    );
};

export default Homepage;