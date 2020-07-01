import { Component } from '@angular/core';

enum States {
  Loading,
  Success,
  Error
}

@Component({
  selector: 'app-scratch-pad',
  templateUrl: './scratch-pad.component.html',
  styleUrls: ['./scratch-pad.component.scss']
})
export class ScratchPadComponent {
  states = States;
  currentState= States.Loading;
}
