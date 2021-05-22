import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,} from '@angular/forms';
import {Nota} from "../../interfaces/nota"
import {ServicioNotasService} from "../../services/servicio-notas.service"
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizarnotas',
  templateUrl: './actualizarnotas.component.html',
  styleUrls: ['./actualizarnotas.component.scss']
})
export class ActualizarnotasComponent implements OnInit {
  formulario:FormGroup;
  titulo:any;
  estado:any;
  descripcion:any;
  ruta2:any;
  id:number=0;
  lista:Array<Nota>=[];
  nota:any;
  NotaParcial:any;
  indice:number=0;

  constructor(public fb:FormBuilder,private ruta:ActivatedRoute,private servicio:ServicioNotasService,private router: Router) {
    this.formulario = this.fb.group({
      titulo:["",[Validators.required,Validators.maxLength(15)]],
      estado:["",[Validators.required]],
      descripcion:["",[Validators.required,Validators.maxLength(150)]],
     
    });
    

  
  }

  ngOnInit(): void {
    this.titulo=this.formulario.get("titulo") as FormGroup;
    this.estado=this.formulario.get("estado") as FormGroup;
    this.descripcion=this.formulario.get("descripcion") as FormGroup;

    this.ruta2=this.ruta.params.subscribe(parametros=>{
      this.id=parametros["id"];
    });
    this.servicio.ConsultarNotas().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
        if(datos[i].id==this.id){
          this.nota=datos[i];
          this.indice=i;
        }
      }
    });
  }
  Editar(){
    this.nota={titulo:this.titulo.value,estado:this.estado.value,descripcion:this.descripcion.value,id:this.id};
    this.lista[this.indice]=this.nota;
    console.log(this.nota.titulo,this.nota.estado,this.nota.descripcion,this.nota.id);
    this.servicio.GuardarNotas(this.lista).subscribe(datos=>{
    });
    this.router.navigateByUrl('/lista-notas');
  }
}