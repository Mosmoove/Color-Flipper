const btn = document.getElementById("btn-color");
const currentColor = document.getElementById("current-color");
const hexValues = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
// first we create an array to generate the Hex values
const getRandomValues = () => { // getting the random values of an index
    const randomIndex = Math.floor(Math.random() * hexValues.length); // we get a random number from the hexValues array length we just created
    const randomHexValue = hexValues[randomIndex];

    return randomHexValue; // we return the random Hex value
};

const getRandomHex = (stringLength) => {
    let hexString = "";
    for(let i = 0; i < stringLength; i++) {
        hexString += getRandomValues(); //while i is less than the length of the string, we increment the random Hex values from what is found in the getRandomValues function
    }

    return hexString;
}

btn.addEventListener('click', () => { // user clicks on the button and changes the background color
    const randomHexString = '#' + getRandomHex(6);
    document.body.style.setProperty('background-color', randomHexString);

    currentColor.textContent = randomHexString;
    });
    