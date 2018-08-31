import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { ApiComponent } from './api/api.component';
import { RoutingModule } from './routing.module';
import { TypeComponent } from './type/type.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    ApiComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
