function shortLongShort(...args) {
    args.sort((a, b) => a.length - b.length);
    return args[0] + args[1] + args[0];
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"