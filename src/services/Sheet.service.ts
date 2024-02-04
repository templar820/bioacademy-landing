export default class SheetService {
  static scriptUrl = 'https://script.google.com/macros/s/AKfycbwikNJCFXAtwghttuU2WqJ7vfRlqF5ugXPd5-qD5Gb2XXbyopMVBh---CZ2_iDyPPPK/exec';

  
  
  initService(){
  
  }

  async createRow(name, surname, email, phone) {
    const formData = new FormData();
    formData.set('Name', name);
    formData.set('Surname', surname);
    formData.set('Email', email);
    formData.set('Phone', phone);
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
