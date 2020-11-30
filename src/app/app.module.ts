import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegumeComponent } from './market/legume/legume.component';
import { LeslegumesComponent } from './market/leslegumes/leslegumes.component';

@NgModule({
  declarations: [
    AppComponent,
    LegumeComponent,
    LeslegumesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
