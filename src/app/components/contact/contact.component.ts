import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactNo: string = '(+31) 622335523';
  email: string = 'nam9503@gmail.com';
  location : string = 'Almere, Netherlands';

  constructor(){}

  ngOnInit(): void {
  }


}
