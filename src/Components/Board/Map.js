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
}));





//todo delete below

// //calculates increments of spots on grid by longitutde/latitude
// var diamLong = 0.1713; //calculated by hand right now – should always be same if resolution/zoom doesn't change
// var diamLat = -0.1077;//calculated by hand right now – should always be same if resolution/zoom doesn't change
// var incrementLong = diamLong / 14;
// var incrementLat = diamLat / 14;
//
// //left-most position
// var leftLong = centerLong - (diamLong / 2);
// var movingLong = leftLong;
//
// //top-most position on grid
// var topLat = centerLat - (diamLat / 2);
//
//
// //creates 2-dimensional array of Circle objects
// //0-based indexing
// //top and left-most spot is arr[0][0]
// //bottom and right-most spot is arr[14][14]
//
//
//       var arr = [];
//       for (var i = 0; i < 15; ++i){
//             arr[i]=[];
//             for (var j = 0; j < 15; ++j){
//               arr[i].push(<Circle center={{lat: topLat, lng: movingLong}}
//                             radius = {12}
//                             color="black"
//                             fillOpacity="0.5"
//                             opacity="0.5"
//                             interactive="true"/>);
//               movingLong = movingLong + incrementLong;
//             }
//             topLat = topLat + incrementLat;
//             movingLong = leftLong;
//       }





function Map (props) {

    console.log('lat: ' + props.lat)
    console.log('long: ' + props.long)


    //variables – center of city todo need to delete these comments at some point
    const centerLat = (props.lat ? props.lat : 36.1627); //board will default to nashville for dev purposes
    // 39.953;
    // 34.052;
    // 47.606;
    // 36.1627;
    // 37.775;
    const centerLong = (props.long ? props.long : -86.7816);
    // -75.165;
    // -118.244;
    // -122.332;
    // -86.7816;
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
            {/*{arr}*/}



          </LeafletMap>
        </div>
    );
}

export default Map;

