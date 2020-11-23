
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "civilwar",
                title: "When was the Civil War?",
                choices: [
                    "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                ],
                correctAnswer: "1850-1900"
            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            },
            {
                type: "radiogroup",
                name: "magnacarta",
                title: "What is the Magna Carta?",
                choicesOrder: "random",
                choices: [
                    "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            },
            {
                type: "radiogroup",
                name: "divide",
                title: "Through which national park does the Continental Divide not pass??",
                choicesOrder: "random",
                choices: [
                    "Yosemite", "Glacier", "TYellow Stone", "Romy Mountain"
                ],
                correctAnswer: "Yosemite"
            },
            {
                type: "radiogroup",
                name: "OlympicMountains",
                title: "On what peninsula in Washington would you find the Olympic Mountains?",
                choicesOrder: "random",
                choices: [
                    "Washington Peninsula", "Seattle Peninsula", "Puget Peninsula", "Olympic Peninsula"
                ],
                correctAnswer: "Olympic Peninsula"
            },
            {
                type: "radiogroup",
                name: "OlympicMountains",
                title: "On what peninsula in Washington would you find the Olympic Mountains?",
                choicesOrder: "random",
                choices: [
                    "Washington Peninsula", "Seattle Peninsula", "Puget Peninsula", "Olympic Peninsula"
                ],
                correctAnswer: "Olympic Peninsula"
            },
            {
                type: "radiogroup",
                name: "television",
                title: "Which U.S. president was the first to appear on television?",
                choicesOrder: "random",
                choices: [
                    "Abraham Lincoln", "Ronald Reagan", "Richard Nixon", "Franklin D. Roosevelt"
                ],
                correctAnswer: "Franklin D. Roosevelt"
            },
            {
                type: "radiogroup",
                name: "Pilgrims",
                title: "What is the name of the ship that brought the Pilgrims to America?",
                choicesOrder: "random",
                choices: [
                    "Discovery", "Mayflower", "Speedwell", "Franklin D. Roosevelt"
                ],
                correctAnswer: "Franklin D. Roosevelt"
            },
            {
                type: "radiogroup",
                name: "Pilgrims",
                title: "What is the name of the ship that brought the Pilgrims to America?",
                choicesOrder: "random",
                choices: [
                    "Discovery", "Mayflower", "Speedwell", "Godspeed"
                ],
                correctAnswer: "Mayflower"
            },
            {
                type: "radiogroup",
                name: "AmericanRevolution",
                title: "What battle is considered the turning point of the American Revolution?",
                choicesOrder: "random",
                choices: [
                    "Battle of Fort Sumter", "Battle of Saratoga", "Battle of Gettysburg", "Battle of Trenton"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });