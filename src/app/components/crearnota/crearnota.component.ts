import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl,} from '@angular/forms';
import {Nota,ListaNotas} from "../../interfaces/nota"
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router'
import {ServicioNotasService} from "../../services/servicio-notas.service"

@Component({
  selector: 'app-crearnota',
  templateUrl: './crearnota.component.html',
  styleUrls: ['./crearnota.component.scss']
})
export class CrearnotaComponent implements OnInit {
  formulario:FormGroup;
  titulo:any;
  estado:any;
  descripcion:any;
  Lista:Array<Nota>=[];
  generacionId:any;

  constructor(public fb:FormBuilder, private router: Router,private servicio:ServicioNotasService) {
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
    this.servicio.ConsultarNotas().subscribe(notas =>{
      if(notas!=null){
        for(let i=0;i<notas.length;i++){
          this.Lista.push(notas[i]);
        }
        
      }
    });
  }
 
  crear(){
    
    let cont: number;

    if(this.Lista.length!=0){
      cont = this.Lista[this.Lista.length-1].id+1;
    }
    else{
      cont=1;
    }


    let notita:Nota = {titulo:this.titulo.value ,estado:this.estado.value,descripcion:this.descripcion.value,id:cont};
    this.Lista.push(notita);
    console.log(notita.titulo,notita.estado,notita.descripcion,notita.id);
    this.servicio.GuardarNotas(this.Lista).subscribe(notas =>{
      console.log(notas);
    });
    this.router.navigateByUrl('/lista-notas');
  }
}
