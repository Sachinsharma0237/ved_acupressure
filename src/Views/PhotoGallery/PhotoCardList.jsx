import React from 'react'
import PhotoCard from './PhotoCard';

export default function PhotoCardList(){

    const diseases = [
        { image:"/img/2.jpeg" },
        { image:"/img/3.jpeg" },
        { image:"/img/4.jpeg" },
        { image:"/img/5.jpeg" },
        { image:"/img/6.jpeg" },
        { image:"/img/7.jpeg" },
        { image:"/img/8.jpeg" },
        { image:"/img/9.jpeg" },
        { image:"/img/10.jpeg" },
        { image:"/img/11.jpeg" },
        { image:"/img/12.jpeg" },
        { image:"/img/13.jpeg" },
        { image:"/img/14.jpeg" },
        { image:"/img/15.jpeg" },
        { image:"/img/16.jpeg" },
        { image:"/img/1.jpeg" },
    ];

    return(
        <React.Fragment>
        <div className="card-list">
                { diseases.map(disease=>{
                    return <PhotoCard disease={disease} />
                })}
        </div>
        </React.Fragment>
    );
}