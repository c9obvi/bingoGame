let pastNumbers = [];

document.getElementById('rollButton').addEventListener('click', rollNumber);
document.getElementById('resetButton').addEventListener('click', resetGame);

function rollNumber() {
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * 75) + 1;
    } while (pastNumbers.includes(newNumber));

    pastNumbers.push(newNumber);
    displayNumbers();
    scrollToLatestNumber();
}

function resetGame() {
    pastNumbers = [];
    displayNumbers();
}

function displayNumbers() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.innerText = pastNumbers.join(', ');
    // Adjust the scroll after updating the numbers
    adjustNumbersWidth();
}

function scrollToLatestNumber() {
    const numbersContainer = document.getElementById('numbers');
    numbersContainer.scrollLeft = numbersContainer.scrollWidth;
}

function adjustNumbersWidth() {
    const numbersContainer = document.getElementById('numbers');
    const container = document.querySelector('.container');
    const desiredMargin = 20; // Desired margin on each side in pixels

    numbersContainer.style.width = `${container.offsetWidth - (desiredMargin )}px`; // Set width based on container's width
    numbersContainer.style.marginLeft = `${desiredMargin}px`; // Set left margin
    numbersContainer.style.marginRight = `${desiredMargin}px`; // Set right margin
}


// Call adjustNumbersWidth on window resize and on initial load
window.addEventListener('resize', adjustNumbersWidth);
window.addEventListener('load', adjustNumbersWidth); // Ensure it runs when the document loads
