import { Contact } from '../models/contact.model';

export class Config {
  /*  public static get FAKE_LIST_CONTACT() {
        return [new Contact(
            {
                id: 1,
                nom: 'Coulon',
                prenom: 'Théophile',
                numero: '0600000000',
                favoris: true
            }
        )];
    }*/
    public static get SERVER_URL() {
        return 'http://localhost/api/';
    }
}
