import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente:Cliente=new Cliente();
  @Output() deleteCliente:EventEmitter<Cliente>=new EventEmitter();
  @Output() updateCliente:EventEmitter<Cliente>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

    onDelete(cliente:Cliente){
      this.deleteCliente.emit(cliente);
    }
    onUpdate(cliente:Cliente){
      this.updateCliente.emit(cliente);
    }

}
