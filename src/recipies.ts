import type { Recipies } from "./utils/types";

const recipies: Recipies = {
    v60: {
        name: "V60",
        tagline:
            "James Hoffman's recommended technique for making coffee with the Hario V60, and any other cone-shaped brewer with a large open area.",
        image:
            "https://cdn.shopify.com/s/files/1/2525/7682/products/Hario-Copper-Dripper1_900x.jpg?v=1569022983",
        description: "TODO: write description",
        minWater: 250,
        maxWater: 500,
        defaultRatio: 60,
        defaultVolume: 360,
        steps: [
            {
                description:
                    "Wet the grounds using twice the coffee weight in water",
                duration: 5,
            },
            {
                description:
                    "Swirl vigorously, making sure to wet all the grounds",
                duration: 10,
            },
            {
                description: "Let the grounds bloom until the 30 second mark",
                duration: 15,
            },
            {
                description: "Pour in 60% of water over the next 30 seconds",
                duration: 30,
            },
            {
                description:
                    "Pour in the remainder of the water over the next 30 seconds",
                duration: 30,
            },
            {
                description: "Stir once clockwise and once counterclockwise",
                duration: 10,
            },
            {
                description:
                    "Swirl once clockwise and once counterclockwise once it's safe to do so",
                duration: 5,
            },
            {
                description: "Let the V60 drain",
                duration: 90,
            },
        ],
    },
    "french-press": {
        name: "French Press",
        tagline:
            "James Hoffman's recommended technique for making coffee with the French Press.",
        image:
            "https://images.pexels.com/photos/4556526/pexels-photo-4556526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        description: "TODO: write description",
        minWater: 500,
        maxWater: 1000,
        defaultRatio: 65,
        defaultVolume: 500,
        steps: [
            {
                description:
                    "Pour in the desired amount of water and let it steep",
                duration: 240,
            },
            {
                description: "Stir the crust and scoop off the foam",
                duration: 20,
            },
            {
                description: "Let the coffee steep",
                duration: 360,
            },
            {
                description:
                    "Put in the plunger just below the surface of the coffee and use it as a strainer",
                duration: 15,
            },
        ],
    },
};

export default recipies;
