import { Route } from '@angular/router';
import { SyntaxComponent } from './templates/syntax/syntax.component';
import { PropertyBindingComponent } from './templates/property-binding/property-binding.component';
import { NgContainerComponent } from './templates/ng-container/ng-container.component';
import { NgTemplateComponent } from './templates/ng-template/ng-template.component';
import { NgForComponent } from './templates/ng-for/ng-for.component';
import { DomTypesComponent } from './typescript/dom-types/dom-types.component';

export const typescript: Route[] = [{
  path: 'dom-types',
  component: DomTypesComponent,
}];

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
}, {
  path: 'ng-for',
  component: NgForComponent
}];