import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('broomState', [
      state('down', style({
        bottom: '50px'
      })),
      state('fly', style({
        bottom: '500px'
      })),
      transition('down=>fly', animate('1600ms')),
      transition('fly=>down', animate('1600ms')),
    ])
  ]
})
export class AppComponent {
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode === 38) {
      this.broomState = 'fly';
    }
    if(event.keyCode === 40) {
      this.broomState = 'down';
    }
  }
  title = 'broom';
  broomState = 'down';
}
