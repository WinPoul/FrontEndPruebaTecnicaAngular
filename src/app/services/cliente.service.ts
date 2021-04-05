import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import  {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url:string='http://localhost:9191/clientes/listar';
  urlAdd:string='http://localhost:9191/clientes/guardar';
  urlDelete:string='http://localhost:9191/clientes/eliminar/';
  urlFind:string='http://localhost:9191/clientes/';
  urlUpdate:string='http://localhost:9191/clientes/actualizar';
  httpOptions={
headers:{
  'Content-Type':'application/json'
}
  };

  constructor(private http:HttpClient) { }



  getClientes():Observable<Cliente[]>{

    return this.http.get<Cliente[]>(this.url);
  }

  addCliente(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.urlAdd,cliente,this.httpOptions);
  }

  updateCliente(cliente:Cliente){
    return this.http.put<Cliente>(this.urlUpdate,cliente,this.httpOptions);

  }
  deleteCliente(cliente:Cliente):Observable<Cliente>{
     return this.http.delete<Cliente>((this.urlDelete+cliente.id));
  }

  findCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(this.urlFind+id);
  }


}
