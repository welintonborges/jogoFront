import { Component } from '@angular/core';

import { JogoService } from '../app/pages/jogo/shared/jogo.service';
import {Jogador} from "./pages/jogo/shared/jogador.model";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JOKENPO';
  motrarCabecalho:boolean = true;

  private apiPath: string ="api/jogo/play"
  constructor(private http: HttpClient) { }

  create1() {
    console.log("aqui")
    this.get();
  }

  create(jogador: Jogador): Observable<Jogador[]>{
    return this.http.post(this.apiPath, jogador).pipe(
      catchError(this.handleError),
      map(this.jsonDataToJogador)
    )
  }

  get(): Observable<Jogador[]>{
    console.log("oi", this.apiPath)
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToJogador)
    )

  }

  private handleError(error:any):Observable<any> {
    console.log("ERRO NA REQUISÇÃO",error)
    return throwError(error)
  }

  // @ts-ignore
  private jsonDataToJogador(jsonData: any[]): Jogador[] {
    const jogadores: Jogador[] = [];
    jsonData.forEach(element => jogadores.push(element as Jogador))
  }

}

