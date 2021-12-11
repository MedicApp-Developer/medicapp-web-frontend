import { useFormik } from 'formik';
import React, { useCallback, useRef, useState } from 'react'
import * as Yup from 'yup';
import {
    GoogleMap, 
    useLoadScript,
    Marker,
    InfoWindow
  } from '@react-google-maps/api'
import mapStyles from '../../../../assets/js/mapStyles';
import SearchMap from './SearchMap';
import LocateMap from './LocateMap';
import HOSPITAL_LOCATION_IMAGE from '../../../../assets/images/hospital-location.png'
import { toast } from 'react-toastify';
import { usePromiseTracker } from "react-promise-tracker";
import HashLoader from "react-spinners/HashLoader";

const libraries = ["places"];
const mapContainerStyle = {
  width: "28rem",
  height: "15rem"
}

const center = {
  lat: 23.4241,
  lng: 53.8478
}

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
}

function AddressInfo({ onSecondFormSubmit }) {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries
    });

    const { promiseInProgress } = usePromiseTracker();

    const [markers, setMarkers] = useState({});
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
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);

    const formik = useFormik({
        initialValues: {
          address: "",
          state: "Dubai"
        },
        validationSchema: Yup.object({
          address:  Yup.string().required(),
          state: Yup.string()
        }),
        onSubmit: async values => {
            if(Object.values(markers).length === 0){
                toast.error("Please select location of hospital");
                return false;
            }
            onSecondFormSubmit(values, markers);
        },
      });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                                <div class="form-group">
                                    <select {...formik.getFieldProps('state')} className="form-control">
                                        <option value="Dubai">Dubai</option>
                                        <option value="Abu Dhabi">Abu Dhabi</option>
                                        <option value="Sharjah">Sharjah</option>
                                        <option value="Ajman">Ajman</option>
                                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                        <option value="Fujairah">Fujairah</option>
                                        <option value="Umm al-Quwain">Umm al-Quwain</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" {...formik.getFieldProps('address')} class={ (formik.touched.address && formik.errors.address) ? "form-control is-invalid" : "form-control"} placeholder="Hospital Address" />
                                    {formik.touched.address && formik.errors.address ? (
                                        <div class="invalid-feedback text-right-aligned">{formik.errors.address}</div>
                                    ) : null}
                                </div>
                                <div class="form-group">
                                    {loadError && "Error loading map"}
                                    {!isLoaded && "Loading Maps"}
                                    { (!loadError && isLoaded) && (
                                        <>  
                                                <SearchMap panTo={panTo} />
                                                <LocateMap panTo={panTo} />
                                                <GoogleMap 
                                                    mapContainerStyle={mapContainerStyle}
                                                    zoom={8}
                                                    center={center}
                                                    options={options}
                                                    onClick={onMapClick}
                                                    onLoad={onMapLoad}
                                                >
                                                    <Marker
                                                        position={{
                                                            lat: markers.lat,
                                                            lng: markers.lng
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
                                <button type="submit" disabled={promiseInProgress} style={promiseInProgress ? { padding: '20px' } : {}} class="btn btn-primary mt-2">
                                {promiseInProgress ? (
                                    <HashLoader color="#fff" loading={true} size={15} />
                                ) : (
                                    <>Register</> 
                                )}
                                </button>
                            </form>
        </div>
    )
}

export default AddressInfo
