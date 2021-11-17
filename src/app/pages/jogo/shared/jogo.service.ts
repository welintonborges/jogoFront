import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  itensUrl = 'http://localhost:8080/api/jogo/play';
  constructor(private http: HttpClient ) { }

  get(nome:any , escolha:any){
    console.log("item", this.itensUrl)
    return this.http.get(this.itensUrl + "/"+ nome + "/"+ escolha);

    alert("aqui")
  }

}
