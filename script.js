function displayGreeting(firstName, fatherName) {
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = `Hello ${firstName} son/daughter of ${fatherName}`;

    const firstNameLengthElement = document.getElementById("firstNameLength");
    firstNameLengthElement.textContent = `Your First name is ${firstName.length} characters long`;

    const fatherNameLengthElement = document.getElementById("fatherNameLength");
    fatherNameLengthElement.textContent = `Your father's name is ${fatherName.length} characters long`;
}

document.addEventListener("DOMContentLoaded", function() {
    let firstName = window.prompt("Please enter your first name");
    let fatherName = window.prompt("Please enter your father's name");

    firstName = firstName.toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    fatherName = fatherName.toLowerCase();
    fatherName = fatherName.charAt(0).toUpperCase() + fatherName.slice(1);

    displayGreeting(firstName, fatherName);
});

document.addEventListener("DOMContentLoaded", function() {
    const greetingButton = document.getElementById("greetingButton");
    const greetingText = document.getElementById("greetingText");

    greetingButton.addEventListener("click", function() {
        let greeting;
        const time = new Date().getHours();
        if (time < 10) {
            greeting = "You have my Axe";
        } else if (time < 20) {
            greeting = "You have my Sword";
        } else {
            greeting = "You have my Bow";
        }
        greetingText.textContent = greeting;
    });
});

const FellowshipMembers = [
    "Frodo", "Sam", "Merry", "Pippin", "Gandalf the Grey",
    "Aragorn", "Gimli", "Legolas", "Boromir"
];

let gandalfIsGrey = true;

function displayFellowshipMembers() {
    const fellowshipList = document.getElementById("fellowshipList");
    fellowshipList.innerHTML = ""; // Clear the list before updating

    FellowshipMembers.forEach(member => {
        const listItem = document.createElement("li");
        listItem.textContent = member;
        fellowshipList.appendChild(listItem);
    });

    // Display the length of the array
    const arrayLength = FellowshipMembers.length;
    const lengthInfo = document.createElement("p");
    lengthInfo.textContent = `Total Members: ${arrayLength}`;
    fellowshipList.appendChild(lengthInfo);
}

function toggleBoromir() {
    const boromirIndex = FellowshipMembers.indexOf("Boromir");
    if (boromirIndex !== -1) {
        FellowshipMembers.splice(boromirIndex, 1);
    } else {
        FellowshipMembers.push("Boromir");
    }
    displayFellowshipMembers();
}

function toggleGandalf() {
    const gandalfIndex = FellowshipMembers.indexOf(
        gandalfIsGrey ? "Gandalf the Grey" : "Gandalf the White"
    );
    if (gandalfIndex !== -1) {
        FellowshipMembers[gandalfIndex] = gandalfIsGrey
            ? "Gandalf the White"
            : "Gandalf the Grey";
        gandalfIsGrey = !gandalfIsGrey;
        displayFellowshipMembers();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    displayFellowshipMembers();

    const toggleBoromirButton = document.getElementById("toggleBoromir");
    const toggleGandalfButton = document.getElementById("toggleGandalf");
    const refreshArrayButton = document.getElementById("refreshArray");

    toggleBoromirButton.addEventListener("click", toggleBoromir);
    toggleGandalfButton.addEventListener("click", toggleGandalf);
});

document.addEventListener("DOMContentLoaded", function() {
    const fellowshipAges = [38, 36, 102, 28, 87, 68, 139, 293, 41];

    const maxAge = Math.max(...fellowshipAges);
    const minAge = Math.min(...fellowshipAges);
    const sumOfAges = fellowshipAges.reduce((total, age) => total + age, 0);
    const averageAge = sumOfAges / fellowshipAges.length;
    const averageAgeRounded = averageAge.toFixed(2);
    const averageAgeRoundedInt = Math.round(averageAge);

    const ageStatsElement = document.getElementById("ageStats");
    ageStatsElement.innerHTML = `
        Maximum Age: ${maxAge}<br>
        Minimum Age: ${minAge}<br>
        Sum of Ages: ${sumOfAges}<br>
        Average Age (Rounded to 2 decimals): ${averageAgeRounded}<br>
        Average Age (Rounded to nearest integer): ${averageAgeRoundedInt}
    `;
});

function displayCurrentYear() {
    const result = document.getElementById("result");
    const currentYear = new Date().getFullYear();
    result.textContent = `Current Year: ${currentYear}`;
}

function displayCurrentMonth() {
    const result = document.getElementById("result");
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex = new Date().getMonth();
    const currentMonth = months[currentMonthIndex];
    result.textContent = `Current Month: ${currentMonth}`;
}

function displayCurrentDay() {
    const result = document.getElementById("result");
    const currentDay = new Date().getDate();
    result.textContent = `Current Day: ${currentDay}`;
}

function displayCurrentHour() {
    const result = document.getElementById("result");
    const currentHour = new Date().getHours();
    result.textContent = `Current Hour: ${currentHour}`;
}

function displayCurrentMinute() {
    const result = document.getElementById("result");
    const currentMinute = new Date().getMinutes();
    result.textContent = `Current Minute: ${currentMinute}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const showYearButton = document.getElementById("showYear");
    const showMonthButton = document.getElementById("showMonth");
    const showDayButton = document.getElementById("showDay");
    const showHourButton = document.getElementById("showHour");
    const showMinuteButton = document.getElementById("showMinute");

    showYearButton.addEventListener("click", displayCurrentYear);
    showMonthButton.addEventListener("click", displayCurrentMonth);
    showDayButton.addEventListener("click", displayCurrentDay);
    showHourButton.addEventListener("click", displayCurrentHour);
    showMinuteButton.addEventListener("click", displayCurrentMinute);
});
