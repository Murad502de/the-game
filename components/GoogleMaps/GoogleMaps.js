import React, { useRef } from "react";
import styles from "./GoogleMaps.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import customMarker from "../../public/images/marker.png";
import { mapStyles } from "./theme";
import CyberButton from "../../UI/CyberButton/CyberButton";

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
  fullscreenControl: false,
  styles: mapStyles,
  streetViewControl: false,
};

const center = { lat: 25.077097631716903, lng: 55.13445435061175 };

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const mapRef = useRef(null);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = null;
  }, []);

  if (!isLoaded) {
    return <div>Загрузка...</div>;
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
      <Marker position={center} icon={customMarker} />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.text1}>DUBAI</div>
          <div className={styles.text2}>JBR, Bahar 2</div>
          <CyberButton btnClassName={styles.btn} color="simple">
            Open in Google Maps
          </CyberButton>
        </div>
      </div>
    </GoogleMap>
  );
};

export default GoogleMaps;
