export interface Pedido {
    id: number;
    clienteId: number;
    fecha: Date;
    productos: { nombre: string; cantidad: number; precio: number }[];
    total: number;
    tipoEntrega: 'domicilio' | 'recoger';
  }
  