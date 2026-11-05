const answer = confirm("Should I calculate the square root?");

if (answer) {
    const number = Number(prompt("Enter a number:"));

    if (number < 0) {
        document.querySelector("body").innerHTML =
            "The square root of a negative number is not defined";
    } else {
        const result = Math.sqrt(number);

        document.querySelector("body").innerHTML =
            `The square root is ${result}`;
    }

} else {
    document.querySelector("body").innerHTML =
        "The square root is not calculated.";
}