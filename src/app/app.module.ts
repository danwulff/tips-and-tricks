import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Route } from '@angular/router';
import { SyntaxComponent } from './templates/syntax/syntax.component';
import { PropertyBindingComponent } from './templates/property-binding/property-binding.component';
import { NgContainerComponent } from './templates/ng-container/ng-container.component';
import { NgTemplateComponent } from './templates/ng-template/ng-template.component';
import { from } from 'rxjs';

export const templates: Route[] = [{
  path: 'syntax',
  component: SyntaxComponent
}, {
  path: 'property',
  component: PropertyBindingComponent
}, {
  path: 'container',
  component: NgContainerComponent
}, {
  path: 'template',
  component: NgTemplateComponent
}]

const routes: Routes = [{
  path: 'templates',
  children: [...templates]
}, {
  path: 'typescript',
  children: []
}];

@NgModule({
  declarations: [
    AppComponent,
    SyntaxComponent,
    PropertyBindingComponent,
    NgContainerComponent,
    NgTemplateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
