const { stdin, stdout } = process;

/**
 * stdin input
 * @param {string} msg 
 * @returns {Promise<string>}
 */
let input = (msg = "") => new Promise((resolve, reject) => {
    stdout.write(msg);

    stdin.once("data", (buffer) => {
        let str = buffer.toString();
        str = typeof str == "string" ? str.replace(/\n$/, "") : ""; 
        resolve(str);
    })
})

module.exports = input;