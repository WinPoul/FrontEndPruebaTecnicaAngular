import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../models/articulo';
import { ArticuloService } from '../../services/articulo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addarticulo',
  templateUrl: './addarticulo.component.html',
  styleUrls: ['./addarticulo.component.css']
})
export class AddarticuloComponent implements OnInit {

  id:number;
  codigo:string;
  nombre:string;
  precioUnitario:number;

  constructor(private articuloService:ArticuloService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const articulo=new Articulo();
    articulo.id=this.id;
    articulo.codigo=this.codigo;
    articulo.nombre=this.nombre;
    articulo.precioUnitario=this.precioUnitario;
    this.articuloService.addArticulo(articulo).subscribe(x=>{
    this.router.navigate(['/articulos']);
    })


  }

}
