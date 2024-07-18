import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: '', component: ListaPedidoComponent },
  { path: '', component: HomeComponent },
  { path: 'detalle/:id', component: DetallePedidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutesModule { }
