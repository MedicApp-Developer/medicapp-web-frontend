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
    
    let origin = {};
    const that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
        origin.lat = position.coords.latitude;
        origin.lng = position.coords.longitude;
    
        const destination = { lat: that.props.hospitalLocation?.coordinates[0], lng:  that.props.hospitalLocation?.coordinates[1]};

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log(result)
                    that.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    });
    
    
}

render() {
    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
            defaultCenter={{ lat: this.props.hospitalLocation?.coordinates[0], lng:  this.props.hospitalLocation?.coordinates[1] }}
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