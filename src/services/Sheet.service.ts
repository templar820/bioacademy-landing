import BaseNotification from '$components/notifications/BaseNotification';
import AppStore from '../stores/App.store';
import NotificationManager from '../helpers/NotificationManager';

export default class SheetService {
  static scriptUrl = 'https://script.google.com/macros/s/AKfycbw3fdDTeAsoJ_tdmHAGIP1j1SnsbmxLQcgWvftFmyqTGtKD-UD7cd7_gaf8wbGTeCxJ/exec';

  initService() {
  }

  async createRow(name, surname, email, phone) {
    const formDatab = new FormData();
    formDatab.set("Name", name);
    formDatab.set("Surname", surname);
    formDatab.set("Email", email);
    formDatab.set("Phone", phone);
    console.log(formDatab);
    return fetch(
      SheetService.scriptUrl,
      {
        method: 'POST',
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
