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
                textDisplay: "Qui",
            },
            {
                name: "Quoi",
                icon: "fa-solid fa-circle-question",
                color: "orange",
                textDisplay: "Quoi",
            },
            {
                name: "Quand",
                icon: "fa-solid fa-hourglass-start",
                color: "green",
                textDisplay: "Quand",
            },
            {
                name: "Où",
                icon: "fa-solid fa-location-dot",
                color: "red",
                textDisplay: "Où",
            },
            {
                name: "Comment",
                icon: "fa-solid fa-gear",
                color: "brown",
                textDisplay: "Comment",
                choices: [
                    {
                        name: "Je",
                        icon: "fa-solid fa-image-portrait",
                        color: "orange",
                        textDisplay: "est-ce que je",
                    },
                    {
                        name: "Tu",
                        icon: "fa-solid fa-image-portrait",
                        color: "orange",
                        textDisplay: "est-ce que tu",
                    },
                    {
                        name: "Vous",
                        icon: "fa-solid fa-image-portrait",
                        color: "orange",
                        textDisplay: "est-ce que vous",
                    },
                    {
                        name: "Les amis",
                        icon: "fa-solid fa-image-portrait",
                        color: "orange",
                        choices: [
                            {
                                name: "Sabrina et Didier",
                                icon: "fa-solid fa-image-portrait",
                                color: "orange",
                                textDisplay: "est-ce que Sabrina et Didier",
                            },
                        ],
                    },
                    {
                        name: "Mes parents",
                        icon: "fa-solid fa-image-portrait",
                        color: "orange",
                        choices: [
                            {
                                name: "Mamie (Marie-Thérèse)",
                                icon: "fa-solid fa-image-portrait",
                                color: "orange",
                                textDisplay: "est-ce que Mamie",
                                choices: [
                                    {
                                        name: "Va (Santé, Etat)",
                                        icon: "fa-solid fa-image-portrait",
                                        color: "orange",
                                        textDisplay: "se porte ?",
                                        end: true
                                    },
                                ],
                            },
                            {
                                name: "Papi (Gaston)",
                                icon: "fa-solid fa-image-portrait",
                                color: "orange",
                                textDisplay: "est-ce que Mamie",
                            },
                        ],
                    },
                ],
            },
        ],
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
                textDisplay: "Je",
            },
        ],
    },
];
