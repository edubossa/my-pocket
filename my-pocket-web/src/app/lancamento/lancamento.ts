import { Categoria } from '../categorias/categoria';

enum Type {
    INPUT,
    OUTPUT
}

export interface Lancamento {
    id: number;
    category: Categoria;
    type: Type;
    description: string;
    date: Date;
    value: number;
}
