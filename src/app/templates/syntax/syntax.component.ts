import { Component } from '@angular/core';

interface Customer {
  id: number;
  name: string;
  type: 'paid' | 'free';
}

@Component({
  selector: 'app-syntax',
  templateUrl: './syntax.component.html',
  styleUrls: ['./syntax.component.scss']
})
export class SyntaxComponent {
  currentCustomer: Customer = {
    id: 1,
    name: 'Daniel',
    type: 'free'
  };

  constructor() { }

  handleSignIn(customer: Customer): void {
  // handleSignIn(event: MouseEvent): void {
  //https://developer.mozilla.org/en-US/docs/Web/API/Event
    console.log(customer);
    // do some stuff
  }
}
