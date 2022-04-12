function getString() {
    let stringInput = document.getElementById("stringInput").value;

    //checks if input is null
    if (stringInput != "") {
        let originalText = stringInput;
        //convert to lower case and take out spac
        stringInput = stringInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

        //assigning reversedString result to reversedString to pass onto view
        let reversedString = reverseStringB(stringInput);

        //calling view and passing the reversed input
        displayString(originalText, checkPalindrome(stringInput, reversedString));

    } else {
        alert("Please input a valid string!");
    }
}

//View model
function displayString(message, isPalindrome) {

    document.getElementById("results").innerHTML = "";
    element = document.getElementById("results");
    let item = document.createElement("div");
    item.classList.add("palindromeText");

    //change innerHTML to the original input and whethere it is palindrome or not
    item.innerHTML = `${message} ${isPalindrome}`;
    element.appendChild(item);
}

//function to reverse string
function reverseString(message) {
    let reversedString = "";

    for (i = message.length - 1; i >= 0; i--) {
        let char = message[i];
        //concatenante reversedString with the character from the index of message
        reversedString += char;
        //convert to lower caps
    }
    console.log(reversedString);
    console.log(message);
    return reversedString;
}

//algorithm using built in functions
function reverseStringB(message) {
    let reversedString = "";

    reversedStringArray = message.split("");
    reversedString = reversedStringArray.reverse().join("");
    return reversedString;
}

//algorithm to check if string is palindrome
function checkPalindrome(message, reversedString) {
    if (message == reversedString) {
        return "is a palindrome";
    } else {
        return "is not a palindrome";
    }
}