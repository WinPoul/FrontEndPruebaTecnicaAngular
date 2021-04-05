import { Component, OnInit,Input, Output ,EventEmitter  } from '@angular/core';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input() articulo:Articulo=new Articulo();

  constructor() { }

  ngOnInit(): void {
  }

}
