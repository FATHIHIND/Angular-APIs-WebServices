import { Contact } from '../models/contact.model';

export class Contact {
    public static get FAKE_LIST_CONTACT() {
        return [new Contact(
            {
                id: 1,
                nom: 'Coulon',
                prenom: 'Théophile',
                numero: '0600000000',
                favoris: true
            }
        )];
    }
}
