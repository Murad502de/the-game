import React from "react";
import styles from "./GoogleMaps.module.scss";
import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import customMarker from "../../public/images/marker.png";
import { mapStyles } from "./theme";
import { useRef } from "react";

const defaultOptions = {
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    rotateControl: false,
    clickableIcons: false,
    scrollwheel: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: false,
    fuulscreenControl: false,
    styles: mapStyles
}

const GoogleMaps = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyBGqJqbeNEbz-E95Y3fhSzeACToSWiZ9B8'});

    const mapRef = useRef(null);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = null;
    }, [])

    if(!isLoaded) {
        return (
            <div>Загрузка</div>
        )
    }

    return (
        <GoogleMap 
            onLoad={onLoad}
            onUnmount={onUnmount}
            zoom={12} 
            center={{lat: 25.077097631716903, lng: 55.13445435061175}} 
            mapContainerClassName={styles.mapsWrapper}
            options={defaultOptions}
        >
            <Marker position={{lat: 25.077097631716903, lng: 55.13445435061175}} options={{icon: {
                url: customMarker
            }}} />
        </GoogleMap>
    )
}

export default GoogleMaps;