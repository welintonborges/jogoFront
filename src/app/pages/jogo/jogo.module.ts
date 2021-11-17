import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoRoutingModule } from './jogo-routing.module';
import { PlayComponent } from './play/play.component';


@NgModule({
  imports: [
    CommonModule,
    JogoRoutingModule
  ],
  declarations: [
    PlayComponent
  ]
})
export class JogoModule { }
