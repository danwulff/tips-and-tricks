import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dom-types',
  templateUrl: './dom-types.component.html',
  styleUrls: ['./dom-types.component.scss']
})
export class DomTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event): void {
    console.log('handleClick', event);
  }
}
