import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';

import {  Observable, throwError} from 'rxjs';
import { catchError, map, flatMap } from 'rxjs/operators';
import { Jogador } from './jogador.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  private apiPath: string ="api/jogo"
  constructor(private http: HttpClient) { }

  create(jogador: Jogador): Observable<Jogador[]>{
    return this.http.post(this.apiPath, jogador).pipe(
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
