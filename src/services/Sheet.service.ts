export default class SheetService {
  static scriptUrl = 'https://script.google.com/macros/s/AKfycbwikNJCFXAtwghttuU2WqJ7vfRlqF5ugXPd5-qD5Gb2XXbyopMVBh---CZ2_iDyPPPK/exec';

  
  
  initService(){
  
  }

  async createRow(name, surname, email, phone) {
    const formDatab = new FormData();
    formDatab.set('Name', name);
    formDatab.set('Surname', surname);
    formDatab.set('Email', email);
    formDatab.set('Phone', phone);
    return fetch(
      SheetService.scriptUrl,
      {
        method: 'POST',
        body: formDatab
      }
    )
      .then(res => res.text())
      .then(data => Promise.resolve(true))
      .catch(error => {
        console.log(error);
      });
  }
}
