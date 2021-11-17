import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './pages/jogo/play/play.component';
import { FormsModule } from "@angular/forms";
import  { Jogador } from "./pages/jogo/shared/jogador.model";
import { ToastrModule } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
