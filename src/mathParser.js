function mathParser(mathStr) {
    mathStr = mathStr.trim();
    let tokens = [];
    let numberBuffer = "";

    // create the token array
    for (let i = 0; i < mathStr.length; i++) {
        if (!isNaN(mathStr[i]) || mathStr[i] === ".") {
            numberBuffer += mathStr[i];
        } else {
            if (numberBuffer) {
                tokens.push(numberBuffer);
                numberBuffer = "";
            };

            tokens.push(mathStr[i]);
        };
    };
    if (numberBuffer) {
        tokens.push(numberBuffer);
    };

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