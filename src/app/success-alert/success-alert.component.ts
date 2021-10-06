import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [
    `
  p{
    padding:20px;
    background-color: paleGreen;
    border: 1px solid: Green;
  }
`,
  ],
})
export class SuccessAlertComponent implements OnInit {
  NewflagValue  = false;
  checkValue = 'Testing is in Progress!';
  UpdateValue = 'Two Binding';
  ngIfValues = 'Conditional Values';
  constructor() {
    setTimeout(() => {
      this.NewflagValue = true;
    }, 2000);
  }
  ngOnInit() {}

  oncheckValue() {
    this.checkValue = 'Testing is Completed!';
    this.ngIfValues = 'Conditional Added successfully';
  }
  onUpdateValue(event: Event) {
    this.UpdateValue = (<HTMLInputElement>event.target).value;
  }
}
