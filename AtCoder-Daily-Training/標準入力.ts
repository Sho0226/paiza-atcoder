const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines: string[] = [];

rl.on('line', (line: string) => {
    inputLines.push(line);
    if (inputLines.length === 2) {
        rl.close();
    }
});

rl.on('close', () => {
    const N: number = parseInt(inputLines[0]);
    const A: number[] = inputLines[1].split(' ').map(Number);

    let sum: number = 0;
    for (let i = 0; i < N; i++) {
        sum += A[i];
    }
    
    console.log(sum);
});
