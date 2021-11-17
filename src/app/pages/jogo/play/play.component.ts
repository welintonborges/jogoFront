import { Component, OnInit } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  motrarCabecalho:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log("aqui", this.motrarCabecalho)

     this.motrarCabecalho = false;
  }



}
