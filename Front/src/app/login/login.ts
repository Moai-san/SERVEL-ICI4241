import {Component} from '@angular/core';
import { UserLogin } from "./userLogin";
import usersData from '../../assets/users.json'; 
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {ConexionBackEndService} from '../conexion-back-end.service'
interface User {   
    name: String;
    surname: String;
    rut: String;
    password: String;
    bDate: String;
}

@Component(
{
    templateUrl: './login.html',
    styleUrls: ['./login.scss']

})
export class login
{
    formularioLogIn:FormGroup;
    loginModel = new UserLogin('', '');
    usuarioIngresado:boolean = false;    
    constructor(public formL:FormBuilder, public backEnd:ConexionBackEndService){
        this.formularioLogIn=this.formL.group({
            rut: "",
            clave: ""
        })
    }
    loginsubmitted = false;
    //loginOnSubmit() { this.loginsubmitted = true; }
    users: User[] =usersData; //aqui va el json que se parsea de la db, puse cualquier cosa mientras
    public loginOnSubmit(){
        
        this.backEnd.postInicioS({          
          "rut":this.formularioLogIn.get("rut")?.value,
          "clave":this.formularioLogIn.get("clave")?.value
        }).subscribe(respuesta=>{
          //console.log(respuesta[0].rut);
          if(respuesta[0] != "F"){
           this.setSesionIniciada(true); 
          }else{
            window.alert("Verifique sus datos nuevamente o en su defecto verifique que usted pueda votar")
          }
        });
    }
    public setSesionIniciada(valor:boolean)
    {
      this.usuarioIngresado = valor;
    }
    public getSesionIniciada(){
      return this.usuarioIngresado;
    }
}