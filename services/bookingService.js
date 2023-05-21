import {bookingLink} from '../shared/common';

export const bookSeat = () => {
  console.debug('bookSeat'); //DELETE
  window.open(bookingLink, '_blank').focus();
};