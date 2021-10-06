import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [
    `
  .online{
    color: white; 
  }
`,
  ],
})
export class SampleComponent {
  serverID: number = 10;
  ServerStatus: string = 'Offline';
  ServerName = 'TestJOthi';
  Servers = ['TestServer ', 'TestServer2'];

  constructor() {
    this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.ServerStatus;
  }

  getcolor() {
    return this.ServerStatus === 'Online' ? 'green' : 'pink';
  }
}
