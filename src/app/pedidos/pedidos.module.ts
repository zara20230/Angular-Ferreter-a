import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidoComponent } from './pedido/lista-pedido/lista-pedido.component';
import { DetallePedidoComponent } from './pedido/detalle-pedido/detalle-pedido.component';
import { PedidosRoutesModule } from './pedidos-routes.module';

@NgModule({
  declarations: [
    ListaPedidoComponent,
    DetallePedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutesModule
  ]
})
export class PedidosModule { }
