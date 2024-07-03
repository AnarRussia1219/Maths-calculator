function mathParser(mathStr) {
    mathStr = mathStr.trim();
    let tokens = mathStr.split(" ");

    // multiplication and division
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "*") {
            tokens[i - 1] = String(Number(tokens[i - 1]) * Number(tokens[i + 1]));
            tokens[i] = false;
            tokens[i + 1] = false;

            // remove i and i + 1
            tokens = tokens.filter((token) => Boolean(token));

            // reset i
            i = 0;
        } if (tokens[i] === "/") {
            tokens[i - 1] = String(Number(tokens[i - 1]) / Number(tokens[i + 1]));
            tokens[i] = false;
            tokens[i + 1] = false;

            // remove i and i + 1
            tokens = tokens.filter((token) => Boolean(token));

            // reset i
            i = 0;
        } 
    };

    // addition and subtraction
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+") {
            tokens[i - 1] = String(Number(tokens[i - 1]) + Number(tokens[i + 1]));
            tokens[i] = false;
            tokens[i + 1] = false;

            // remove i and i + 1
            tokens = tokens.filter((token) => Boolean(token));

            // reset i
            i = 0;
        } if (tokens[i] === "-") {
            tokens[i - 1] = String(Number(tokens[i - 1]) - Number(tokens[i + 1]));
            tokens[i] = false;
            tokens[i + 1] = false;

            // remove i and i + 1
            tokens = tokens.filter((token) => Boolean(token));

            // reset i
            i = 0;
        } 
    };

    return tokens[0];
};

export {
    mathParser
};