import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap,Marker } from "react-google-maps"

const Map = (props) => {
  return (
      <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
        <Marker position={{ lat: -34.397, lng: 150.644 }}/>
      </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));
