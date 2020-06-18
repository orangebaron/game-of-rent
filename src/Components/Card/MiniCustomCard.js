import React, { useState } from 'react';
import '../../App.css';
import './MiniCustomCard.css';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles({

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        padding: 0,
    },
});

export default function MiniCustomCard(props) {
    const classes = useStyles();

    if (props.cardProps === undefined) return <div></div>;
    const [typeText, cardInfo] = props.cardProps



    let text;
    if(typeText === 'Occupation'){
        text = <div className='mini-card-text'>
            <h2>{cardInfo.title}</h2>
            <p>Monthly Income: ${cardInfo.income}</p>
        </div>
    } else if( typeText === 'Household') {
        text = <div className='mini-card-text'>
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
    } else if(typeText === 'Life'){
        text = <div className='mini-card-text'>
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
    } else {
        //todo add neighborhood cards
    }

    return (
        <div className='mini-custom-card'>
            <CardActions className={"mini-div"+typeText}>
                <h2>{typeText}</h2>
            </CardActions>
            {text}

        </div>
    );
}
