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
  coord: {
    backgroundColor: '#ffa500', 
    height: '8vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#ffffff'
  },
  container: {
    padding: 0,
  },
  occupationDiv: {
    color: '#ffffff',
    backgroundColor: '#ffa500', 
    height: '10vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
  }
});

export default function CustomCard() {
  const classes = useStyles();


  // Currency Formatting:
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  // States for CustomCard:
  const [occupation, setOccupation] = useState('Retail Salesperson');
  const [income, setIncome] = useState(2270);
  const [coordX, setCoordX] = useState('J');
  const [coordY, setCoordY] = useState(12);
  
  return (
    <Card className={classes.card}>

    <CardActions className={classes.occupationDiv}>
      <React.Fragment>
        <CssBaseline />
        <Container className={classes.container} >
          <Typography component="div" className={classes.occupationDiv}> 
            <Typography variant="h5" component="h2"> Occupation </Typography>
          </Typography>
        </Container>
      </React.Fragment>
    </CardActions>
      
    <CardContent>
      <Typography variant="h4" component="h4" gutterBottom> {occupation} </Typography>
      <Typography variant="h6" component="h5">
        Monthly Income: <br />
        {formatter.format(income)}
      </Typography>
    </CardContent>
    <CardActions className={classes.coord}>
      <Typography variant="h5" component="h2">
        {coordX + coordY}
      </Typography>
    </CardActions>
  </Card>
);}
