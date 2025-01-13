export default function  ParesArray(palavras: number[]): number[] {
    const isPar = (num: number) => {
        return num % 2 === 0
    };
    return palavras.filter(isPar);
}

