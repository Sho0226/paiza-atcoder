import * as readline from 'readline';

function readInputLines(numLines: number): Promise<string[]> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let inputLines: string[] = [];
        rl.on('line', (line: string) => {
            inputLines.push(line);
            if (inputLines.length === numLines) {
                rl.close();
            }
        });

        rl.on('close', () => {
            resolve(inputLines);
        });
    });
}

async function main() {
    const inputLines = await readInputLines(2);
    
    // 1行目のデータを処理する
    const N: number = parseInt(inputLines[0]);
    
    // 2行目のデータを処理する
    const A: number[] = inputLines[1].split(' ').map(Number);

    // 処理ロジックをここに記述する
    let sum: number = 0;
    for (let i = 0; i < N; i++) {
        sum += A[i];
    }
    
    // 結果を出力する
    console.log(sum);
}

main();
