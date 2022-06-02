import React, { useCallback, useRef, useState } from 'react'
import {
    GoogleMap, 
    useLoadScript,
    Marker
  } from '@react-google-maps/api'
import HOSPITAL_LOCATION_IMAGE from '../../../../../assets/images/hospital-location.png'

const libraries = ["places"];
const mapContainerStyle = {
  width: "69rem",
  height: "15rem"
}

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

function LocateHospital({ lat, lng }) {
    const center = {
        lat,
        lng
    }
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries
    });

    const [markers, setMarkers] = useState({ lat: lat, lng: lng });

    const mapRef = useRef();

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    return (
        <>
                                <div>
                                    {loadError && "Error loading map"}
                                    {!isLoaded && "Loading Maps"}
                                    { (!loadError && isLoaded) && (
                                        <>  
                                                <GoogleMap 
                                                    mapContainerStyle={mapContainerStyle}
                                                    zoom={8}
                                                    center={markers ?? center}
                                                    options={options}
                                                    onLoad={onMapLoad}
                                                >
                                                    <Marker
                                                        position={{
                                                            lat: markers.lat ?? center.lat,
                                                            lng: markers.lng ?? center.lng
                                                        }}
                                                        icon={{
                                                          url: HOSPITAL_LOCATION_IMAGE,
                                                          scaledSize: new window.google.maps.Size(30,30),
                                                          origin: new window.google.maps.Point(0,0),
                                                          anchor: new window.google.maps.Point(15, 15)
                                                        }}
                                                    >
                                                    </Marker>
                                                </GoogleMap>
                                        </>
                                    )}
                        </div>
        </>
    )
}

export default LocateHospital
