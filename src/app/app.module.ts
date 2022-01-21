import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputMaskModule } from '@ngneat/input-mask';
import { AlpfanumericDirective } from './alpfanumeric.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AlpfanumericDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
