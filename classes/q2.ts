export abstract class Animal {
    protected nome: string;
    
    constructor(nome: string) {
      this.nome = nome;
    }
    abstract fazerSom(): string;
  
    static fazerOperacao(animal: Animal): string {
      return `${animal.nome} diz: ${animal.fazerSom()}`;
    }
  }
  
export class Cachorro extends Animal {
    private raca: string;
  
    constructor(nome: string, raca: string) {
      super(nome);
      this.raca = raca;
    }
  
    fazerSom(): string {
      return "Au Au";
    }
  
    // Método específico da subclasse
    getRaca(): string {
      return this.raca;
    }
  
    setRaca(raca: string): void {
      this.raca = raca;
    }
  }
  
export class Gato extends Animal {
    private cor: string;
  
    constructor(nome: string, cor: string) {
      super(nome);
      this.cor = cor;
    }
  
    fazerSom(): string {
      return "Miau";
    }
  
    // Método específico da subclasse
    getCor(): string {
      return this.cor;
    }
  
    setCor(cor: string): void {
      this.cor = cor;
    }
  }
  
 
