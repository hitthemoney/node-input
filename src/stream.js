const { stdin, stdout } = process;

let init = () => {
    stdin.on("data", (buffer) => {
        callbacks.forEach((callback) => {
            callback(buffer);
        })
    })
}

let callbacks = [];

/**
 * Creates a stdin stream
 * @param {(buffer: Buffer) => void} callback 
 * @returns {number} Stream ID
 */
let connect = (callback) => {
    if (!callback) throw new Error("You must provide a callback");
    if (!callbacks.length) init();

    callbacks.push(callback);

    return callbacks.length;
}

/**
 * Disconnects a stdin stream
 * @param {number} id Stream ID
 */
let disconnect = (id) => {
    delete callbacks[id - 1];
}

module.exports = {
    connect,
    disconnect
};