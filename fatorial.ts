export default function fatorial(e: number): number {
    if (e <= 0) throw new Error("Number is not valid");
    let result = 1;
    for (let x = e; x > 1; x--) {
        result = result * x;
    }
    return result;
}