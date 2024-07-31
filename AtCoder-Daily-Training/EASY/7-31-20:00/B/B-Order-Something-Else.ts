import { readInputLines } from  "../../../inputReader"

async function main() {
    const inputLines = await readInputLines(2);
  
    const [n,p,q] = inputLines[0].split(" ").map(Number);
    const dvalues = inputLines[1].split(' ').map(Number);

    let dMin = Math.min(...dvalues)

    const result = Math.min(p,q + dMin)
    console.log(result)
}

main();