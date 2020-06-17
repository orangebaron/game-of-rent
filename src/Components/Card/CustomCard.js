import React, { useState } from 'react';
import '../../App.css';
import './CustomCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    // card: {
    //   // minWidth: 275,
    //   // maxWidth: 350,
    //   width: '15vw',
    //   height: '40vw * 1.56',
    // },
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


    console.log(props.cardProps)
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
            <p>Monthly Income: ${cardInfo.income}</p>
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
    }

    return (
        <div className='custom-card'>
            <CardActions className={"div"+typeText}>
                <h2>{typeText}</h2>
            </CardActions>


                {text}
                    {/*<p>{bigText}</p>*/}
                    {/*<p>{littleText1}</p>*/}
                    {/*<p>{littleText2}</p>*/}
                    {/*<p>{littleText3}</p>*/}
                    {/*<p>{littleText4}</p>*/}


        </div>
    );
}
