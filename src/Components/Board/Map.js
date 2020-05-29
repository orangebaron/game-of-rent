import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';


import Nash from './img/Nashville-map-cropped.jpg';
import Letters from './img/Grid Letters.png';
import Numbers from './img/Grid Numbers.png';
import Dice from '../Dice/Dice.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100vw',
    height: '100vh',
  },
  map: {
    maxHeight: '50%',
    maxWidth: '50%',
  },
  numbers: {

  },
  letters: {

  },
}));

class Map extends React.Component {
  render() {
    return (
        <div className='leaflet-container'>
          <LeafletMap
              center={[36.1627, -86.7816]}
              zoom={13}
              minZoom={13}
              maxZoom={13}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={false}
              animate={true}
              easeLinearity={0.35}
          >
            <style className={useStyles.root}>
            </style>
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Marker position={[36.1627, -86.7816] }>
              <Popup>
                These will be used for house/job locations
              </Popup>
            </Marker>
          </LeafletMap>
        </div>
    );
  }
}

export default Map;

/*
function MyMap() {
  const classes = useStyles();
  return (
      <div>
        <LeafletMap
            center={[36.1627, -86.7816]}
            zoom={13}
            maxZoom={13}
            minZoom={13}
            attributionControl={true}
            zoomControl={false}
            doubleClickZoom={true}
            scrollWheelZoom={false}
            dragging={false}
            animate={true}
            easeLinearity={0.35}
        >
          <style>
            className={classes.root}
          </style>
          <TileLayer
              /!*url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'*!/
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </LeafletMap>
      </div>
  );
}
export default MyMap;*/

/*function Map() {
  const classes = useStyles();

  // the Dice component is just a wrapper for ReactDice, so why not just use that?

  return (

    <div className={classes.root}>
      {/* <img width= src={Numbers} alt="numbers for map grid" className="gridNumbers" /> */}
      {/* <img src={Letters} alt="letters for map grid" className="gridLetters" /> */}
      <img src={Nash} className={classes.map} alt="Nashville Map" />
      <div style={{position:"relative", left:-90, top:"50%"}}>
        <div style={{position:"relative",top:-90}}>
          <Dice />
        </div>
      </div>
    </div>

  );
}

/*function MyMap(){
  const classes = useStyles();
    return (
        <div>
          <LeafletMap
              center={[36.1627, -86.7816]}
              zoom={13}
              maxZoom={13}
              minZoom={13}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={true}
              scrollWheelZoom={false}
              dragging={false}
              animate={true}
              easeLinearity={0.35}
          >
            <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </LeafletMap>
        </div>
    );
}

export default MyMap;*/

{/*
function Map(){
  const classes = useStyles();
  // create map
  this.map = L.map('map', {
    center: [49.8419, 24.0315],
    zoom: 16,
    layers: [
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }),
    ]
  });
}
return <div className={classes.root}id="map"></div>
}

export default Map;
const classes = useStyles();
  const position = [51.505, -0.09]
  const map = (
      <Map center={position} zoom={13}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
  )*/}


/*function MyMap() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        {/!* <img width= src={Numbers} alt="numbers for map grid" className="gridNumbers" /> *!/}
        {/!* <img src={Letters} alt="letters for map grid" className="gridLetters" /> *!/}
        <img src={Nash} className={classes.map} alt="Nashville Map" />
        {/!* need to add dice to map *!/}
      </div>
  );
}

export default MyMap;*/
