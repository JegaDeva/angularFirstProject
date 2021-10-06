import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { SampleComponent } from './Sample/sample.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    SampleComponent,
    AppComponent,
    HelloComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
