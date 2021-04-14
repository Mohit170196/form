import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
})
export class PersonFormComponent implements OnInit {

  person: Person = new Person();

  async add() {
    console.log(this.person.firstName, this.person.lastName, this.person.email, this.person.country, this.person.dob, this.person.avatar);

    const data = {
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      email: this.person.email,
      country: this.person.country,
      dob: this.person.dob,
    };
    const response = await fetch('http://localhost:3000/save', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(data);
    alert('Data Saved');
    this.person = new Person();
  }

  ngOnInit() {

  }

}
