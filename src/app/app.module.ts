import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ForInputComponent } from './for-input/for-input.component';
import { ForStyleComponent } from './for-style/for-style.component';
import { ForClassComponent } from './for-class/for-class.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ForInputComponent,
    ForStyleComponent,
    ForClassComponent,
    NumberComponent,
    NumberParentComponent,
    OutputComponent,

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

