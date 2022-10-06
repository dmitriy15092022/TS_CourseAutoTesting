let credit: number;
let pereplata: number;

function getPereplata(credit: number) {
    const stavka = 17;
    const period = 5;

    pereplata = credit - ((credit * stavka) / 100) * period;
    return pereplata;
}

console.log(getPereplata(110000));
