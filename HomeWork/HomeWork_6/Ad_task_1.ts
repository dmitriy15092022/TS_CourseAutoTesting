const schetStroka = "2:5";
const schetObj = schetStroka.split(":");

parseInt(schetObj[0]) > parseInt(schetObj[1])
    ? console.log("Спартак ведёт со счётом:", schetObj[0], "---", "Зенит уступает со счетом:", schetObj[1])
    : console.log("Зенит ведёт со счётом:", schetObj[1], "---", "Спартак уступает со счетом:", schetObj[0]);
