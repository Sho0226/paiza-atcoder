import { readInputLines } from  "../../../inputReader"

async function main() {
    const inputLines = await readInputLines(2);
    const N: number = parseInt(inputLines[0]);
    const A: number[] = inputLines[1].split(' ').map(Number);

    let sum: number = 0;
    for (let i = 0; i < N; i++) {
        sum += A[i];
    }
    
    console.log(sum);
}

main();