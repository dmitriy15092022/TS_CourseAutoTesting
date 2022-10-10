let sr1 = 0;
let sr2: number;
const salaries = {
    andrey1: 500,
    sveta: 413,
    anton: 987,
    andrey2: 664,
    alexandra: 199,
};
let k: keyof object;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
for (k in salaries) {
    sr1 += parseInt(salaries[k]);
}
// eslint-disable-next-line prefer-const
sr2 = sr1 / Object.keys(salaries).length;
console.log(sr2);
