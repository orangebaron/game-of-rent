import React, { useState } from 'react';
import '../../App.css';
import './CustomCard.css';
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

export default function CustomCard(props) {
    const classes = useStyles();

    if (props.cardProps === undefined) return <div></div>;
    const [typeText, cardInfo] = props.cardProps
    const width = props.width || '13vw';
    const height = props.height || '20.28vw';


    // Currency Formatting:
    /*
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    // States for CustomCard:
    const [occupation] = useState('Retail Salesperson');
    const [income] = useState(2270);
    const [coordX] = useState('J');
    const [coordY] = useState(12);
    */

    let text;
    if(typeText === 'Occupation'){
        text = <div className='card-text'>
            <h2>{cardInfo.title}</h2>
            <h3>Monthly Income: ${cardInfo.income}</h3>
        </div>
    } else if( typeText === 'Household') {
        text = <div className='card-text'>
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
    } else if(typeText === 'Life'){
        text = <div className='card-text'>
            <h2>{cardInfo.title}</h2>
            <p>{cardInfo.description}</p>
        </div>
    } else if(typeText === 'Neighborhood'){
        text = <div className='card-text'>
            <h2>{cardInfo.neighborhood}</h2>
            <div className='neighborhood-card-text'>
                <p>{cardInfo.rent1.type}: ${cardInfo.rent1.cost}</p>
                {cardInfo.rent2 && <p>{cardInfo.rent2.type}: ${cardInfo.rent2.cost}</p>}
                {cardInfo.rent3 && <p>{cardInfo.rent3.type}: ${cardInfo.rent3.cost}</p>}
                {cardInfo.rent4 && <p>{cardInfo.rent4.type}: ${cardInfo.rent4.cost}</p>}
            </div>
            <div className='neighborhood-card-location'>
                <p>{cardInfo.location}</p>
            </div>
        </div>
    }

    return (
        <div style={{width: width, height: height}} className='custom-card'>
            <CardActions className={"div"+typeText}>
                <h2 style={{textTransform: 'uppercase'}}>{typeText}</h2>
            </CardActions>
                {text}
        </div>
    );
}


