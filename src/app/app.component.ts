import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listeContact: Array<{nom: string, prenom: string, numero: string, fav: boolean}> =
    [{nom: 'PAULAIS', prenom: 'Jordan', numero: '0123456789', fav: false}];
}
