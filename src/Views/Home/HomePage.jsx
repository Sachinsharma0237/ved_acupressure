import * as React from 'react';
import HomeCategories from './HomeCategories';
import HomeFooter from './HomeFooter';
import Home from './Home';
import HomeGrid from './HomeGrid';
import HomeQuestion from './HomeQuestions';
import HomeWorks from './HomeWorks';
import SocialStickyBar from './SocialStickyBar';
import FullImage from './FullImage';
import Footer from './Footer';
import HomeImage from './HomeImage';
import CardList from './Cards/CardList';

export default function HomePage(){
    return(
        <React.Fragment>
          <HomeImage/>
          <HomeGrid/>
          <HomeCategories/>
          <HomeWorks/>
          {/* <FullImage/> */}
          <CardList/>
          <HomeQuestion/>
          <SocialStickyBar/>
          <Footer/>
          {/* <Home/> */}
        </React.Fragment>
    )
}