import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Input } from '@angular/core';
import { ConexionBackEndService } from '../conexion-back-end.service';
import { preferencias } from '../preferencias';

@Component({
  selector: 'vote',
  templateUrl: './vote.html',
  styleUrls: ['./vote.scss']
})

export class vote implements OnInit {
  datos:Array<preferencias>=[];
  tablaPref:FormGroup;
  constructor(private servicio:ConexionBackEndService, public formC:FormBuilder) {
    
    this.tablaPref=this.formC.group({
      
      id:0,
      nombre: ["", Validators.required],
      conteo: ["", Validators.required]
    })
   }


  ngOnInit(): void {
    
    this.servicio.getPreferencias().subscribe(datosBackEnd=>{
      for(let i=0; i<datosBackEnd.length ;i++)
      {
        this.datos.push(datosBackEnd[i]);
      }
  });
  }
}
