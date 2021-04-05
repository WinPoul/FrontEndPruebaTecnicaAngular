import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  url:string='http://localhost:9191/articulos/listar';
  urlAdd:string='http://localhost:9191/articulos/guardar';

  httpOptions={
    headers:{
      'Content-Type':'application/json'
    }
      };

  constructor(private http:HttpClient) { }


  getArticulos():Observable<Articulo[]>{
    return this.http.get<Articulo[]>(this.url);
  }

  addArticulo(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.urlAdd,articulo,this.httpOptions);
  }


}
