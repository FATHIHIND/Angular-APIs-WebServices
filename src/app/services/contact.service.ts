import { Injectable } from '@angular/core';
import { config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getListContact() {
  return config.FAKE_LIST_CONTACT;
}
}
