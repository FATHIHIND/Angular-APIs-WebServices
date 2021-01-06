import { ContactService } from './services/contact.service';
import { Contact } from './config/config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  listeContact: Contact[];

  constructor(private service: ContactService){
    ngOnInit(){
      this.listeContact = this.service.getListContact();
    }
  }
}
