import { googleMapsLink } from '../shared/common';

export const openInGoogleMaps = () => {
  console.debug('openInGoogleMaps'); //DELETE
  window.open(googleMapsLink, '_blank').focus();
};