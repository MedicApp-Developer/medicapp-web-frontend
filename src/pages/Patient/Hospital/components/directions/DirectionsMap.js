/*global google*/
import React, { Component } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    DirectionsRenderer
} from "react-google-maps";
class DirectionsMap extends Component {
    state = {
        directions: null,


};

componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 31.5204, lng:  74.3587 };
    const destination = { lat: 32.1877, lng:  74.1945};

    directionsService.route(
        {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: [
                {
                    location: new google.maps.LatLng(6.4698,  3.5852)
                },
                {
                    location: new google.maps.LatLng(6.6018,3.3515)
                }
            ]
        },
        (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                console.log(result)
                this.setState({
                    directions: result
                });
            } else {
                console.error(`error fetching directions ${result}`);
            }
        }
    );
}

render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: 6.5244, lng:  3.3792 }}
            defaultZoom={13}
        >
            <DirectionsRenderer
                directions={this.state.directions}
            />
        </GoogleMap>
    ));

    return (
        <div>
            <GoogleMapExample
                containerElement={<div style={{ height: `250px`, width: "100%" }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>


       );
    }
}

export default DirectionsMap;