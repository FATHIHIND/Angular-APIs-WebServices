import { Deserializable } from './deserializable.model';
import { DefaultUrlSerializer } from '@angular/router';
export calss Contact implements Deserializable {
     id: number;
     nom: String;
     prenom: String;
     numero: String;
     favoris: boolean;

     constructor(datas: any) {
         this.id = datas.id;
         this.nom = datas.nom;
         this.prenom = datas.prenom;
         this.numero = datas.numero;
         this.favoris = datas.favoris;
     }

       deserialize(input: any): this {
           return Object.assign (this, input);
       }

}
