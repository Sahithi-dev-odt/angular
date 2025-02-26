import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome, {{ name }}!</h1>
    <input [(ngModel)]="name" placeholder="Enter your name">
  `,
  styles: [`h1 { color: green; }`]
})
export class AppComponent {
  name = 'Angular Developer';
}
