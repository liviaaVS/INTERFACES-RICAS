export function ForSimple(numbers: number[]): string{
    // a. iterando com for simples
    let result = "";
    for(let x=0; x < numbers.length; x++){
       const q = numbers[x] * numbers[x];
       result += q.toString() + " ";
    }
    return result;
}
export function ForEach(numbers:number[]): string{
    // b. iterando com forEach
    let result = "";
    numbers.forEach((value) => {
        try {
            const q = value * value;
            result += q.toString() + " ";
        } catch (error) {
            console.error(error.message)
        }
        })
    return result;
}
