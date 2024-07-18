import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClienteComponent } from './cliente/lista-cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente/detalle-cliente.component';

const routes: Routes = [
  { path: '', component: ListaClienteComponent },
  { path: 'detalle/:id', component: DetalleClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutesModule { }
