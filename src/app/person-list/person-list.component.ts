import { Component, OnInit } from '@angular/core';
import { Person } from '../person-form/person';

@Component({
  selector: 'app-person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor() {}
  personList = [
    new Person("1", "Vipul", "Singh", new Date("01/01/1997"), "vipul.s@gmail.com", "India", null),
    new Person("2", "Ambuj", "Gupta", new Date("01/01/1997"), "ambuj.g@gmail.com", "India", null),
    new Person("3", "Adish", "Rao", new Date("01/01/1990"), "adish.r@gmail.com", "India", null),

  ]

  // fetch from api

  async ngOnInit() {

    await fetch('http://localhost:3000/list', {
         mode: 'no-cors',
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    ).then(response => {
      response.json().then(json => {
        json.map(e => {
            this.personList.push(new Person("1", e.firstName, e.lastName,e.dob,e.email , e.country, null));
        });
      });
    });
  }

}
