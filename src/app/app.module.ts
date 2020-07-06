import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { DynamicformquesComponent } from './dynamicformques/dynamicformques.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicformComponent,
    DynamicformquesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
}
