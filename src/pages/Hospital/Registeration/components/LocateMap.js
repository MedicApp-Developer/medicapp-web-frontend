import React from 'react'
import LOCATION_IMAGE from '../../../../assets/images/location.png'

function LocateMap({ panTo, component }) {
    return (
        <button 
          className={ component === "HospitalProfile" ? "hospital-profile-map-locate" : "map-locate"} 
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                panTo({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                })
              }, () => null)
          }}
        > 
          <img src={LOCATION_IMAGE} alt="locate me" /> 
        </button>
      )
}

export default LocateMap
