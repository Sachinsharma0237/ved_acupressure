import React from 'react';
import './Card.css';

export default function Card(props){
    let { disease } = props;
    return(
        <div className="card-container">
                <img className="img" src={disease.image} alt="img" />
                <h2>{disease.name}</h2>
        </div>
    );
}