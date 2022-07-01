import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { votantes } from './votantes';
import { VotanteLogIn } from './votante-log-in';
const httpOptions  ={ 
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ConexionBackEndService {

  constructor(private http:HttpClient) { }
  servidor="http://127.0.0.1:3000";
  getUsuarios():Observable<any>{
    return this.http.get(`${this.servidor}/getUsuarios`);
  }
  getFormularios():Observable<any>{
    return this.http.get(`${this.servidor}/getFormularios`);
  }
  postUsuarios(datos:votantes):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/crearUsuarios`,JSON.stringify(datos),httpOptions);
  }
  /*postFormulario(datos:Formularios):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/crearFormulario`,JSON.stringify(datos),httpOptions);
  }*/
  /*enviarDatos(datos:Usuarios){//enviar los datos al back-end
    console.log(JSON.stringify(datos));
  }*/
  eliminarUsuario(correo:String):Observable<any>{
    console.log(correo);
    return this.http.delete( `${this.servidor}/borrarUsuario/${correo}`, httpOptions );
  }
  postInicioS(datos:VotanteLogIn):Observable<any>{
    console.log(datos);
    return this.http.post(`${this.servidor}/LoginU`,JSON.stringify(datos),httpOptions);
  }

  /*getVerificacion(datos:UsuarioLog):Observable<any> {
    console.log(datos);
    return this.http.post(`${this.servidor}/verificarClave`,JSON.stringify(datos),httpOptions);
  }*/
  putContraseña(datos:VotanteLogIn):Observable<any> {
    console.log(datos);
    return this.http.put(`${this.servidor}/cambiarClave`,JSON.stringify(datos),httpOptions);
  }
}
