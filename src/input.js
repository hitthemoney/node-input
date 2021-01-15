const { stdin, stdout } = process;
const endlRegExp = /(\r\n|\r|\n)$/;

/**
 * stdin input
 * @param {string} msg 
 * @returns {Promise<string>}
 */
let input = (msg = "") => new Promise((resolve, reject) => {
    stdout.write(msg);

    stdin.once("data", (buffer) => {
        let str = buffer.toString();
        str = str.replace(endlRegExp, ""); 
        resolve(str);
    })
})

module.exports = input;