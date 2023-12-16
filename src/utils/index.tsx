import CacheEnum from './Cache.enum';
import debounce from './debounce';

export default class UTILS {
  static getInPx = (number: number) => `${number}px`;

  static getImportant = (v: string) => `${v} !important`;

  static isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  static debounce = debounce;

  static toOffer = () => {
    const data = document.getElementById('Offer');
    data.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
  };

  static RequestCacheEnum = CacheEnum;

  static numberWithSpaces(x) {
    if (String(x).includes('.')) {
      const parts = x.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      return parts.join('.');
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  static decodeHtmlCharCodes = str => {
    const decodedString = document.createElement('textarea');
    decodedString.innerHTML = str;
    return decodedString.value;
  };
}
