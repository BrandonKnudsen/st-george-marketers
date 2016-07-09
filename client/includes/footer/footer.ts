import 'reflect-metadata';
import 'zone.js/dist/zone';
import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'pageFooter',
  template: `
<br>Bottom of App
  `,
  directives: []
})
export class PageFooter extends MeteorComponent  {

}
