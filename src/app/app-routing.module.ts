import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { ClientesComponent } from './components/clientes/clientes.component';
import { AddclienteComponent } from './components/addcliente/addcliente.component';
import { UpdateclienteComponent } from './components/updatecliente/updatecliente.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AddarticuloComponent } from './components/addarticulo/addarticulo.component';

const routes:Routes=[

  {
    path:'articulos',
    component:ArticulosComponent
  },
  {
    path:'addArticulo',
    component:AddarticuloComponent
  },
{
  path:'clientes',
  component:ClientesComponent
},
{
  path:'addCliente',
  component:AddclienteComponent
},
{
  path:'updateCliente/:clienteId/update',
  component:UpdateclienteComponent
}


];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}
