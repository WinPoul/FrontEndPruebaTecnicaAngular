import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-updatecliente',
  templateUrl: './updatecliente.component.html',
  styleUrls: ['./updatecliente.component.css']
})
export class UpdateclienteComponent implements OnInit {

  constructor(private clienteService:ClienteService,private router:Router, private route: ActivatedRoute) { }

  cliente:Cliente;
  id: number;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['clienteId'];
    this.clienteService.findCliente(this.id).subscribe(data=>{
      this.cliente=data;
    })
  }


  onSubmit(){
    this.clienteService.updateCliente(this.cliente).subscribe();
    this.router.navigate(['/clientes']);
  }
}
