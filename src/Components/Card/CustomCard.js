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
  divOccupation: {
    backgroundColor: '#fef200',
    marginTop: 20,
  },
  divHousehold: {
    backgroundColor: '#ed008c',
    marginTop: 10,
  },
  divLife: {
    backgroundColor: '#41ad48',
    marginTop: 10,
  },
  divNeighborhood: {
    backgroundColor: '#00adef',
    marginTop: 10,
  },
  centerText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function CustomCard(props) {
  const classes = useStyles();

  if (props.cardProps === undefined) return <div></div>;
  const [typeText, bigText, littleText1, littleText2, littleText3, littleText4] = props.cardProps

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
    <Card className='custom-card'>

      <CardActions className={classes["div"+typeText]}>
        <>
          <CssBaseline />
          <Container className={classes.container}>
            <Typography component="div" className={classes.centerText}>
              <Typography variant="h4" component="h4"> {typeText} </Typography>
            </Typography>
          </Container>
        </>
      </CardActions>

      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom className={classes.centerText}>
          {' '}
          {bigText}
          {' '}
        </Typography>
        <Typography variant="h6" component="h5" className={classes.centerText}>
          {littleText1}
          {' '}
          <br />
          {littleText2}
          {' '}
          <br />
          {littleText3}
          {' '}
          <br />
          {littleText4}
        </Typography>
      </CardContent>
    </Card>
  );
}
