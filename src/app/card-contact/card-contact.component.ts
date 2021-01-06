import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
})
export class CardContactComponent implements OnInit {

  @Input() item: {id: number, nom: string, prenom: string, numero: string, favoris: boolean};

  constructor() { }

  ngOnInit() {
  }

  changeFavValue() {
    this.item.favoris = !this.item.favoris;
  }

}
