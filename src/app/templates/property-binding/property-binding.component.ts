import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  disabled = true;

  constructor() { }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

}
