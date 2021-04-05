import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AddclienteComponent } from './components/addcliente/addcliente.component';
import { UpdateclienteComponent } from './components/updatecliente/updatecliente.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { AddarticuloComponent } from './components/addarticulo/addarticulo.component';
import { OrdencompraComponent } from './components/ordencompra/ordencompra.component';
import { OrdenescomprasComponent } from './components/ordenescompras/ordenescompras.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClienteComponent,
    ClientesComponent,
    AddclienteComponent,
    UpdateclienteComponent,
    ArticuloComponent,
    ArticulosComponent,
    AddarticuloComponent,
    OrdencompraComponent,
    OrdenescomprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
