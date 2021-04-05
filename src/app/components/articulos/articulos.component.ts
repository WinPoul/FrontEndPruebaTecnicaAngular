import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos:Articulo[]=[];
  constructor(private articuloService:ArticuloService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(data=>{
      this.articulos=data;
      })

  }

}
