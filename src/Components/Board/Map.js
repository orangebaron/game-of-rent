import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import { makeStyles } from '@material-ui/core/styles';

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



//variables – center of city
const centerLat =
// 39.953;
// 34.052;
// 47.606;
36.1627;
// 37.775;
const centerLong = 
// -75.165;
// -118.244;
// -122.332;
-86.7816;
// -122.419;


//calculates increments of spots on grid by longitutde/latitude
var diamLong = 0.1713; //calculated by hand right now – should always be same if resolution/zoom doesn't change
var diamLat = -0.1077;//calculated by hand right now – should always be same if resolution/zoom doesn't change
var incrementLong = diamLong / 14;
var incrementLat = diamLat / 14;

//left-most position
var leftLong = centerLong - (diamLong / 2);
var movingLong = leftLong;

//top-most position on grid
var topLat = centerLat - (diamLat / 2);


//creates 2-dimensional array of Circle objects
//0-based indexing
//top and left-most spot is arr[0][0]
//bottom and right-most spot is arr[14][14]


      var arr = [];
      for (var i = 0; i < 15; ++i){
            arr[i]=[];
            for (var j = 0; j < 15; ++j){
              arr[i].push(<Circle center={{lat: topLat, lng: movingLong}}
                            radius = {12}
                            color="black"
                            fillOpacity="0.5"
                            opacity="0.5"
                            interactive="true"/>);
              movingLong = movingLong + incrementLong;
            }
            topLat = topLat + incrementLat;
            movingLong = leftLong;
      }





class Map extends React.Component {
  render() {
    return (
        <div className='leaflet-container'>
          <LeafletMap
              center={[centerLat, centerLong]}
              zoom={13}
              minZoom={13}
              maxZoom={13}
              attributionControl={true}
              zoomControl={false}
              doubleClickZoom={false}
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
            
            {/* renders the array object */}
            {arr}
      


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

  return (
      <div className={classes.root}>
        {/!* <img width= src={Numbers} alt="numbers for map grid" className="gridNumbers" /> *!/}
        {/!* <img src={Letters} alt="letters for map grid" className="gridLetters" /> *!/}
        <img src={Nash} className={classes.map} alt="Nashville Map" />
        {/!* need to add dice to map *!/}
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
