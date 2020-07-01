import { Component } from '@angular/core';
import { templates, typescript } from './routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  templatesArray = templates;
  typescriptArray = typescript;
}
