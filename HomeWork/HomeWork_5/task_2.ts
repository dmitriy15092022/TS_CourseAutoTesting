let credit: number;
let pereplata: number;

function getPereplata(credit: number) {
    const stavka: number = 17 / 12;
    const period: number = 5 * 12;
    let platej1: number;
    let platej2: number;
    let platej3: number;
    const koef1: number = Math.pow(1 + stavka, period);

    // eslint-disable-next-line prefer-const
    platej1 = koef1 - 1;
    // eslint-disable-next-line prefer-const
    platej2 = stavka / koef1;
    // eslint-disable-next-line prefer-const
    platej3 = stavka + platej2;
    console.log(platej1);
    pereplata = credit * platej3 * period - credit;
    return pereplata;
}

console.log(getPereplata(100000));
