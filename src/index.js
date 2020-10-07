const dictionary = {
    one: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    two: ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    tens: ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
}

module.exports = function toReadable (number) {
    const str = number.toString();

    if (str.length === 1) {
        return dictionary.one[number]
    }

    function getSecondPart(string) {
        const num = +string;
        const firstDigit = +string[0];
        const secondDigit = +string[1];

        if (num % 10 === 0) {
            return dictionary.tens[num / 10 - 1]
        }

        if (num < 10) {
            return dictionary.one[num]
        }

        if (10 < num && num < 20) {
            return dictionary.two[num - 10 - 1]
        }

        return `${dictionary.tens[firstDigit - 1]} ${dictionary.one[secondDigit]}`;
    }

    if (str.length === 2) {
        return getSecondPart(str)
    }

    if (str.length === 3) {

        const firstPart = `${dictionary.one[+str[0]]} hundred`;

        if (number % 100 === 0) {
            return firstPart;
        }

        const tale = str.substring(1);

        const secondPart = getSecondPart(tale);

        return `${firstPart} ${secondPart}`;

    }

    if (str.length > 3) {
        return 'Sorry, task was only to convert three-digit number maximum'
    }
}
