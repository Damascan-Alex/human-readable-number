module.exports = function toReadable(number) {
    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const numString = number.toString();

    if (number < 0) throw new Error("Negative numbers are not supported.");
    if (number === 0) return "zero";
    if (number < 20) {
        return ones[number];
    }

    if (numString.length === 2 && numString[1] != 0) {
        return tens[numString[0]] + " " + ones[numString[1]];
    }

    if (numString.length === 2) {
        return tens[numString[0]];
    }

    //100 and more
    if (numString.length === 3) {
        if (numString[1] === "0" && numString[2] === "0")
            return ones[numString[0]] + " hundred";
        else
            return (
                ones[numString[0]] +
                " hundred " +
                toReadable(+(numString[1] + numString[2]))
            );
    }

    //1000 and more
    if (numString.length === 4) {
        const end = +(numString[1] + numString[2] + numString[3]);
        if (end === 0) return ones[numString[0]] + " thousand";
        if (end < 100)
            return ones[numString[0]] + " thousand " + toReadable(end);
        return ones[numString[0]] + " thousand " + toReadable(end);
    }
};
