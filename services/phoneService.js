import { phone } from '../shared/common';

export const callPhone = () => {
  console.debug('callPhone/phone', phone); //DELETE
  window.open(`tel:${phone}`)
};