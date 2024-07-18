import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';
import { ClientesRoutesModule } from './clientes-routes.module';

@NgModule({
  declarations: [
    ListaClienteComponent,
    DetalleClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutesModule
  ]
})
export class ClientesModule { }
