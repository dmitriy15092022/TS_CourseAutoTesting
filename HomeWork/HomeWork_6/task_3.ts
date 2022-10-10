const student = {
    name: "John",
    age: 19,
    isHappy: true,
};
let StudKey: keyof object;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
for (StudKey in student) {
    console.log(StudKey);
    console.log(student[StudKey]);
}
