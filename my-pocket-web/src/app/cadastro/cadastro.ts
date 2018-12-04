import { Categoria } from '../categorias/categoria';

enum Type {
    INPUT,
    OUTPUT
}

export interface Cadastro {
    id: number;
    categoria: Categoria;
    type: Type;
    description: string;
    date: Date;
    value: number;
}
