import React, { useCallback, useRef, useState } from 'react'
import {
	GoogleMap,
	useLoadScript,
	Marker
} from '@react-google-maps/api'
import HOSPITAL_LOCATION_IMAGE from '../../../../assets/images/hospital-location.png'
import { toast } from 'react-toastify';
import SearchMap from '../../../Hospital/Registeration/components/SearchMap';
import LocateMap from '../../../Hospital/Registeration/components/LocateMap';
import VendorApi from '../../../../api/Vendor';

const libraries = ["places"];
const mapContainerStyle = {
	width: "95.5rem",
	height: "25rem"
}

const options = {
	disableDefaultUI: true,
	zoomControl: true
}

function LocationMap({ lat, lng, vendorId }) {
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

	const onMapClick = useCallback((event) => {
		setMarkers({
			lat: event.latLng.lat(),
			lng: event.latLng.lng()
		})
	}, []);

	const onMapLoad = useCallback((map) => {
		mapRef.current = map;
	}, []);

	const panTo = useCallback(({ lat, lng }) => {
		mapRef.current.panTo({ lat, lng });
		mapRef.current.setZoom(14);
	}, []);

	const updateVendorLocation = async () => {
		if (Object.keys(markers).length === 0 || (markers.lat === undefined || markers.lng === undefined)) {
			toast.error("Please select vendor location")
		} else {
			const location = Object.keys(markers)
				.map(function (key) {
					return markers[key];
				});
			const values = {
				location: {
					type: 'Point',
					coordinates: location
				}
			}

			const response = await VendorApi.updateVendor(vendorId, values);
			if (!response.error) {
				toast.success("Vendor profile updated");
				setTimeout(() => {
					window.location.reload();
				}, 2000);
			} else {
				toast.error("Problem while updating the vendor");
			}
		}
	}

	return (
		<>
			<div>
				{loadError && "Error loading map"}
				{!isLoaded && "Loading Maps"}
				{(!loadError && isLoaded) && (
					<>
						<SearchMap panTo={panTo} component="HospitalProfile" lat={center.lat} lng={center.lng} />
						<LocateMap panTo={panTo} component="HospitalProfile" />
						<GoogleMap
							mapContainerStyle={mapContainerStyle}
							zoom={8}
							center={markers ?? center}
							options={options}
							onClick={onMapClick}
							onLoad={onMapLoad}
						>
							<Marker
								position={{
									lat: markers.lat ?? center.lat,
									lng: markers.lng ?? center.lng
								}}
								icon={{
									url: HOSPITAL_LOCATION_IMAGE,
									scaledSize: new window.google.maps.Size(30, 30),
									origin: new window.google.maps.Point(0, 0),
									anchor: new window.google.maps.Point(15, 15)
								}}
							>
							</Marker>
						</GoogleMap>
					</>
				)}
			</div>
			<div className="form-group text-center">
				<button style={{ float: 'right' }} class="btn btn-primary mt-4" onClick={updateVendorLocation}>
					Update Location
				</button>
			</div>
		</>
	)
}

export default LocationMap
