export interface Cliente {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    direccion: string;         
    ruc?: string;          
    esMayorista: boolean;
  }
  