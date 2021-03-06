import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import  { JogoService } from'./pages/jogo/shared/jogo.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JOKENPO';

  usuario = {
    nome: '',
    escolha : '',
  };

  constructor(private http: HttpClient,
              private JogoService: JogoService
  ) {
  }

  get() {
     console.log("aqui", this.usuario.nome);
    this.JogoService.get(this.usuario.nome, this.usuario.escolha).subscribe(() => {
    })
  }
}

