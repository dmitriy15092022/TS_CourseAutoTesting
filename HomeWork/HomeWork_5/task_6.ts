function foo(): string {
    return "foo";
}

function boo(): string {
    return "boo";
}

function fooboo(a6: boolean, f1: () => string, f2: () => string): string {
    return a6 ? f1() : f2();
}

console.log(fooboo(false, foo, boo));
