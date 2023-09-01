const CHOICES = [
    {
        name: "Question",
        icon: "fa-solid fa-clipboard-question",
        color: "red",
        choices: [
            {
                name: "Qui",
                icon: "fa-solid fa-person-circle-question",
                color: "blue",
                textDisplay: "Qui"
            },
            {
                name: "Quoi",
                icon: "fa-solid fa-circle-question",
                color: "orange",
                textDisplay: "Quoi"
            },
            {
                name: "Quand",
                icon: "fa-solid fa-hourglass-start",
                color: "green",
                textDisplay: "Quand"
            },
            {
                name: "Où",
                icon: "fa-solid fa-location-dot",
                color: "red",
                textDisplay: "Où"
            },
            {
                name: "Comment",
                icon: "fa-solid fa-gear",
                color: "brown",
                textDisplay: "Comment"
            }
        ]
    },
    {
        name: "Affirmation",
        icon: "fa-solid fa-comment",
        color: "green",
        choices: [
            {
                name: "Je",
                icon: "fa-solid fa-image-portrait",
                color: "orange",
                textDisplay: "Je"
            }
        ]
    }
];

document.querySelector('body').append("TEST LOG 1")