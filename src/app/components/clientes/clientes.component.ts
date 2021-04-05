import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public clientes:Cliente[]=[];

  constructor(private clientesService:ClienteService,private router:Router) { }

  ngOnInit(): void {
 this.clientesService.getClientes().subscribe(data=>{
 this.clientes=data;
 })
  }

  deleteCliente(cliente:Cliente){
   this.clientesService.deleteCliente(cliente).subscribe();
   this.clientes=this.clientes.filter(x=>x.id!==cliente.id);

  }
  updateCliente(cliente:Cliente){
  console.log("Update");
  }

}
