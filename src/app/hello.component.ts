import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Jothi Test{{name}}!</h1>`,
  styles: [`h3 { font-family: TimesNewRomen; }`],
})
export class HelloComponent {
  @Input() name: string;
}
