import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-addcliente',
  templateUrl: './addcliente.component.html',
  styleUrls: ['./addcliente.component.css']
})
export class AddclienteComponent implements OnInit {

  id:number;
  nombre:string;
  apellido:string;

  constructor(private clienteService:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    const cliente=new Cliente()
    cliente.id=this.id;
    cliente.nombre=this.nombre;
    cliente.apellido=this.apellido;
    this.clienteService.addCliente(cliente).subscribe(i=>{
      this.router.navigate(['/clientes']);
    });

  }

}
