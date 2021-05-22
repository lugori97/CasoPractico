import { Component, OnInit } from '@angular/core';
import {Nota,ListaNotas} from "../../interfaces/nota";
import { Router } from '@angular/router';
import {ServicioNotasService} from "../../services/servicio-notas.service";

@Component({
  selector: 'app-listarnotas',
  templateUrl: './listarnotas.component.html',
  styleUrls: ['./listarnotas.component.scss']
})
export class ListarnotasComponent implements OnInit {
  Lista:Array<Nota>=[];

  constructor(private router: Router,private servicio:ServicioNotasService) { }

  ngOnInit(): void {
    this.servicio.ConsultarNotas().subscribe(datos=>{
      if(datos!=null){
        for(let i=0;i<datos.length;i++){
          this.Lista.push(datos[i]);
        }
      }
    });
  }
  EliminarNota(item:Nota) {
    const id=item.id;
    let indice:number = this.Lista.indexOf(item);
    this.Lista.forEach((elemento)=> {
      if(elemento.id==id) this.Lista.splice(indice,1);
    });
    this.servicio.GuardarNotas(this.Lista).subscribe(datos=>{
    });
  }
}
