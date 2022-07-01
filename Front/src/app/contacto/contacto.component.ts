import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Usuarios } from '../usuarios';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { PuenteEntreComponentesService } from '../puente-entre-componentes.service';
//import {data}  from 'jquery';
import { Formularios } from '../formularios';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {
  datos:Usuarios;
  datosHTML:Array<Formularios>=[];
  @Input() admin:number = 0;
  formularioContacto:FormGroup;
  //administradorconectado:boolean = false;
  constructor(private servicio:ServicioService, public formC:FormBuilder, private puenteComponentes:PuenteEntreComponentesService) {
    
    this.datos=({
      nombre: "",
      correo: "",
      usuario: "",
      clave: "",
      admin:false
    })
    this.formularioContacto=this.formC.group({
      
      id:0,
      nombre: ["", Validators.required],
      correo: ["", Validators.required],
      asunto: ["", Validators.required],
      mensaje: ["", Validators.required],
    })
   }


  ngOnInit(): void {
    
    this.servicio.getFormularios().subscribe(datosBackEnd=>{
      for(let i=0; i<datosBackEnd.length ;i++)
      {
        this.datosHTML.push(datosBackEnd[i]);
      }
  });
  }
  public generarNuevoComentario(){
    this.servicio.postFormulario({
      "id":0,
      "nombre":this.formularioContacto.get("nombre")?.value,
      "correo":this.formularioContacto.get("correo")?.value,
      "asunto":this.formularioContacto.get("asunto")?.value,
      "mensaje":this.formularioContacto.get("mensaje")?.value,
    }).subscribe(respuesta=>{
      console.log(respuesta);
    });
  }
  
  public verificarAdmin(){
    var adminConectado:boolean;
    adminConectado = this.puenteComponentes.getEstadoAdmin();
    if(adminConectado == true){
      return true;
    }else{
      return false;
    }
    
    /*this.puenteComponentes.Puente.subscribe((datos: Usuarios) =>{
      //andres.vidal.s@mail.pucv.cl
      console.log("aaaaa")
      console.log(datos);
      if(datos.correo == "andres.vidal.s@mail.pucv.cl"){
        console.log("cdddddd");
        this.administradorconectado = true;
      }
    })
    console.log("aaaaassssssssssssddddddd");
    if(this.administradorconectado == true){
      console.log("aaadsssssssssssssssssssssss");
      return true;
    } */
    //else return false;
  }
}
