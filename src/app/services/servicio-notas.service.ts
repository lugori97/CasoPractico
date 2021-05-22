import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import {Nota} from "../interfaces/nota"
@Injectable({
  providedIn: 'root'
})
export class ServicioNotasService {


  url:string = "http://localhost/Caso%20Practico/CasoPractico/backend/";

  constructor(private servicio:HttpClient) { }
 
  ConsultarNotas():Observable<any>{
    return this.servicio.get(`${this.url}mostrar.php`);
    
  }
  
  GuardarNotas(Lista:Array<Nota>):Observable<any>{
    return this.servicio.post(`${this.url}inicio.php`, JSON.stringify(Lista));

  }
}

