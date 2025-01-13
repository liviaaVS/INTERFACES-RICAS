import {ForSimple, ForEach} from './q1';
import UnirArray from './q2';
import OrdenarArray from './q3';
import SliceArray from './q4';
import ParesArray from './q5';


test('For simples', ()=>{
    let numbers: number[] = [3,5,7,3,8,9,1]
    expect(ForSimple(numbers)).toContain("9 25 49 9 64 81 1 ")
});
test('ForEach', ()=>{
    let numbers: number[] = [3,5,7,3,8,9,1]
    expect(ForSimple(numbers)).toContain("9 25 49 9 64 81 1 ")
});

test('Concatenando as String com 1 (um) espaço (“ “). Utilize o método JOIN da classe Array.', ()=>{
    let palavras = ["Arrays", "com", "TypeScript"]
    expect(UnirArray(palavras)).toContain("Arrays com TypeScript")
});

test('Faça um programa que imprima seus elementos ordenados. Use o método SORT da classe Array', ()=>{
    let palavras =  ["carro", "boneco", "ave", "lapis"]
    expect(OrdenarArray(palavras)).toEqual(['ave', 'boneco', 'carro', 'lapis']);
});


test('Faça um programa que imprima seus elementos ordenados. Use o método SORT da classe Array', ()=>{
    let numbers = [2,4,6,2,8,9,5]
    expect(SliceArray(numbers)).toEqual([2,4]);
});

test('Faça um programa que leia o array e extrai os elementos pares. Use o método FILTER da classe Array', ()=>{
    let numbers: number[] = [8, 3, 9, 5, 6, 12]
    expect(ParesArray(numbers)).toEqual([8,6,12]);
});
