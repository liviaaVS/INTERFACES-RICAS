import {Funcionario, Estudante } from './q1';
import { Cachorro, Gato, Animal} from './q2';


test('Testa herança de Pessoas com interface, Q1', ()=>{
    const funcionario = new Funcionario("João", "Desenvolvedor");
    const estudante = new Estudante("Maria", "Engenharia");
    
    expect(funcionario.informarDetalhes()).toEqual('Funcionário: João, Cargo: Desenvolvedor') 
    expect(estudante.informarDetalhes()).toEqual('Estudante: Maria, Curso: Engenharia')   
    
});
test('Testa herança de Animais com classe abstrata, Q1', ()=>{
    const cachorro = new Cachorro("Rex", "Labrador");
    const gato = new Gato("Naninha", "Preto");
    
    // Alterando atributos
    cachorro.setRaca("Poodle");
    gato.setCor("Branco");

    expect(Animal.fazerOperacao(cachorro)).toEqual('Rex diz: Au Au') 
    expect(Animal.fazerOperacao(gato)).toEqual('Naninha diz: Miau')   

});