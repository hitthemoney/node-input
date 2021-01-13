const { input } = require("../src/index");

(async function main () {
    let name = await input("What is your name? ");
    let sport = await input("What is your favorite sport? ");

    console.log(`Hello ${name}, do want to play ${sport} together sometime?`);

    process.exit();
})();