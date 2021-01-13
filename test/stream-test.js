const { stream } = require("../src/index");

let input = stream.connect((buffer) => {
    let args = buffer.toString().trim().split(" ");

    switch (args[0].toLowerCase()) {
        case "exit":
            process.exit();
            break;
        case "eval":
            let res = eval(args.slice(1).join(" "));
            console.log(res);
            break;
        case "disconnect":
            stream.disconnect(input);
            break;
    }
})