import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  items = [{
    id: 1234,
    title: 'First'
  }, {
    id: 928734,
    title: 'Second'
  }, {
    id: 169273,
    title: 'Third'
  }, {
    id: 62973,
    title: 'Fourth'
  }, {
    id: 8237,
    title: 'Fifth'
  }];

  updateIndexOne(): void {
    this.items[0].title = 'updated';
  }
}
