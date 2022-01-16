import React from 'react'

export default function PhotoCard(props){
    let { disease } = props;
    return(
        <div className="card-container1">
                <img className="img" src={disease.image} alt="img" />
                <h2>{disease.name}</h2>
        </div>
    );
}