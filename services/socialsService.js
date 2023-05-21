import {
  phone,
  instagramLink,
  telegramLink,
} from '../shared/common';

export const goToInstagram = () => {
  console.debug('goToInstagram'); //DELETE
  window.open(instagramLink, '_blank').focus();
};

export const goToTelegram = () => {
  console.debug('goToTelegram'); //DELETE
  window.open(telegramLink, '_blank').focus();
};

export const goToWhatsapp = () => {
  console.debug('goToWhatsapp'); //DELETE
  window.open(`https://wa.me/${phone}`, '_blank').focus();
};