const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines: string[] = [];

rl.on('line', (line: string) => {
    inputLines.push(line);
    if (inputLines.length === 2) {
        rl.close(); //任意の行数
    }
});

rl.on('close', () => {
//ロジックを記入
});
