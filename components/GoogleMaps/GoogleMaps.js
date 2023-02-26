import React, { useRef } from "react";
import styles from "./GoogleMaps.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import customMarker from "../../public/images/marker.png";
import { mapStyles } from "./theme";

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

const center = {lat: 25.077097631716903, lng: 55.13445435061175}

const GoogleMaps = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: 'AIzaSyBGqJqbeNEbz-E95Y3fhSzeACToSWiZ9B8'});

    const mapRef = useRef(null);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback() {
        mapRef.current = null;
    }, [])

    if(!isLoaded) {
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <GoogleMap 
            zoom={12} 
            center={center} 
            mapContainerClassName={styles.mapsWrapper}
            options={defaultOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />
        </GoogleMap>
    )
}

export default GoogleMaps;