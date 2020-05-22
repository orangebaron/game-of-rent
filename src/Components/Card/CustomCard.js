import React, { useState } from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  coordOccupation: {
    backgroundColor: '#ffa500',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  coordHousehold: {
    backgroundColor: '#ff5555',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  coordLife: {
    backgroundColor: '#00aa00',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  coordNeighborhood: {
    backgroundColor: '#4CACE9',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  container: {
    padding: 0,
  },
  divOccupation: {
    color: '#ffffff',
    backgroundColor: '#ffa500',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divHousehold: {
    color: '#ffffff',
    backgroundColor: '#ff5555',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divLife: {
    color: '#ffffff',
    backgroundColor: '#00aa00',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divNeighborhood: {
    color: '#ffffff',
    backgroundColor: '#4CACE9',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CustomCard(props) {
  const classes = useStyles();

  if (props.cardProps === undefined) return <div></div>;
  const [typeText, bigText, littleText1, littleText2, coordX, coordY] = props.cardProps

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

  return (
    <Card className={classes.card}>

      <CardActions className={classes["div"+typeText]}>
        <>
          <CssBaseline />
          <Container className={classes.container}>
            <Typography component="div" className={classes["div"+typeText]}>
              <Typography variant="h5" component="h2"> {typeText} </Typography>
            </Typography>
          </Container>
        </>
      </CardActions>

      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
          {' '}
          {bigText}
          {' '}
        </Typography>
        <Typography variant="h6" component="h5">
        {littleText1}
          {' '}
          <br />
          {littleText2}
        </Typography>
      </CardContent>
      <CardActions className={classes["coord"+typeText]}>
        <Typography variant="h5" component="h2">
          {coordX + coordY}
        </Typography>
      </CardActions>
    </Card>
  );
}
