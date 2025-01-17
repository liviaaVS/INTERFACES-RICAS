// Definindo a interface Pessoa com o método 'informarDetalhes'
interface Pessoa {
    informarDetalhes(): string;
  }
  
export class Funcionario implements Pessoa {
    private nome: string;
    private cargo: string;
  
    constructor(nome: string, cargo: string) {
      this.nome = nome;
      this.cargo = cargo;
    }
  
    informarDetalhes(): string {
      return `Funcionário: ${this.nome}, Cargo: ${this.cargo}`;
    }
  }
  
export class Estudante implements Pessoa {
    private nome: string;
    private curso: string;
  
    constructor(nome: string, curso: string) {
      this.nome = nome;
      this.curso = curso;
    }
  
    informarDetalhes(): string {
      return `Estudante: ${this.nome}, Curso: ${this.curso}`;
    }
  }
  
