import React, { useRef } from "react";
import styles from "./GoogleMaps.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import customMarker from "../../public/images/marker.png";
import { mapStyles } from "./theme";
import CyberButton from "../../UI/CyberButton/CyberButton";
import { openInGoogleMaps } from '../../services/mapsService';

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
    googleMapsApiKey: "AIzaSyAR7FCdbNgCKIoTKl1ZFzf4WYKpdfp5aFE", //FIXME set to .env
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
      mapContainerClassName={styles.googleMaps}
      options={defaultOptions}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} icon="https://drive.google.com/uc?export=view&id=1PFlqvWjJdL57NyBN9ueu0pS7aUlJzZ20" />

      <div className={styles.googleMaps__wrapper}>
        <div className={styles.googleMaps__container}>
          <div className={styles.googleMaps__main}>
            <div className={styles.googleMaps__title}>DUBAI</div>
            <div className={styles.googleMaps__subTitle}>JBR, Rimal 9 (Plaza Level)</div>
          </div>

          <CyberButton onClick={openInGoogleMaps} btnClassName={styles.googleMaps__btn} color="simple">
            Open in Google Maps
          </CyberButton>
        </div>
      </div>
    </GoogleMap>
  );
};

export default GoogleMaps;
