import * as readline from 'readline';

export function readInputLines(numLines: number): Promise<string[]> {
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
