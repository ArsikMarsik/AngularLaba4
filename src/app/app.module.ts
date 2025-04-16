import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './pages/main-form/main-form.component';
import { DbComponent } from './pages/db/db.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainTempDrComponent } from './pages/main-temp-dr/main-temp-dr.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    DbComponent,
    MainTempDrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
