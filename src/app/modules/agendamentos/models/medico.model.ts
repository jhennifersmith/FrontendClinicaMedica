import { Pessoa } from "./pessoa.model";

export class Medico {
    id?: number
    crm: string
    dataCriacao: Date
    dataExclusao: Date
    pessoa: Pessoa
}