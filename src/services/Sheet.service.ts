export default class SheetService {
  static scriptUrl = 'https://script.google.com/macros/s/AKfycbyUOnb0kt1aNbk5lmCU6P97w79kkbriechjvj5xFXKg3GkOpA-gl_ZnfYSrHMb_GtTx/exec';

  
  
  initService(){
  
  }

  async createRow(name, surname, email, phone) {
    const formData = new FormData();
    formData.set('Name', name);
    formData.set('Surname', surname);
    formData.set('Email', email);
    formData.set('Phone', phone);
    let currentDate = new Date().toJSON().slice(0, 10);
    formData.set('TS', currentDate);
    console.log(formData);
    return fetch(
      SheetService.scriptUrl,
      {
        method: 'POST',
        body: formData
      }
    )
      .then(res => res.text())
      .then(data => Promise.resolve(true))
      .catch(error => {
        console.log(error);
      });
  }
}
