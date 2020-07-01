import { Component, OnInit } from '@angular/core';
import { templateSourceUrl } from '@angular/compiler';
import { templates } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  templatesArray = templates;
  ngOnInit(): void {
    console.log('templates', this.templatesArray);
  }
}
