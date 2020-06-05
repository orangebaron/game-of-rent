import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
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

