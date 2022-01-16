import React from 'react'
import CardList from '../Home/Cards/CardList';
import HomeCategories from '../Home/HomeCategories';
import './Therapy.css';

export default function Therapy(){
    return(
        <React.Fragment>
            <CardList/>
            <HomeCategories/>
        </React.Fragment>
    )
}