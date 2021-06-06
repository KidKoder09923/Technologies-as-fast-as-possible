//The colon `:` allows the TypeScript to know what type to use
function toString(input: number) : string {
    return `'${input.toString()}'`;
}

console.log(toString(12))