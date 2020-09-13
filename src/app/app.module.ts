import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdataService } from './customerdata.service';
import { CustomerTemplateformsComponent } from './customer-templateforms/customer-templateforms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CustomerComponent, CustomerTemplateformsComponent, ReactiveFormComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [CustomerdataService]
})
export class AppModule { }
