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
import { RouterModule, Routes } from '@angular/router';
import { SyntaxComponent } from './templates/syntax/syntax.component';
import { PropertyBindingComponent } from './templates/property-binding/property-binding.component';
import { NgContainerComponent } from './templates/ng-container/ng-container.component';
import { NgTemplateComponent } from './templates/ng-template/ng-template.component';
import { ScratchPadComponent } from './scratch-pad/scratch-pad.component';
import { NgForComponent } from './templates/ng-for/ng-for.component';
import { DomTypesComponent } from './typescript/dom-types/dom-types.component';
import { typescript, templates } from './routes';

const routes: Routes = [
  {
    path: 'typescript',
    children: [...typescript]
  },
  {
    path: 'templates',
    children: [...templates]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SyntaxComponent,
    PropertyBindingComponent,
    NgContainerComponent,
    NgTemplateComponent,
    ScratchPadComponent,
    NgForComponent,
    DomTypesComponent
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
