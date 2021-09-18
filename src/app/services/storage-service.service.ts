import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  // private  locSto: SecureLS = new SecureLS({encodingType: 'AES', isCompression: true});


  constructor() { }


  setData(key: string, data: any) {
    localStorage.setItem(key, data);
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }

}
