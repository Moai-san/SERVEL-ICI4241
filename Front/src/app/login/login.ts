import {Component} from '@angular/core';
import { UserLogin } from "./userLogin";
import usersData from '../../assets/users.json'; 

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
    loginModel = new UserLogin('', '');
    loginsubmitted = false;
    loginOnSubmit() { this.loginsubmitted = true; }
    users: User[] =usersData; //aqui va el json que se parsea de la db, puse cualquier cosa mientras
}