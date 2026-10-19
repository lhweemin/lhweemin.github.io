var projects = [
    {
        id: "matslam",
        title: "Mat-Slam Simulation",
        summary: "A WWE-inspired wrestling simulation where AI wrestlers, a referee and a crowd act out matches using behavior trees.",
        description: "A wrestling match that plays itself, built with behavior trees on a framework from my AI course during my Overseas Immersion Programme in the US. A Slammer finds a target, strikes (with a 30% chance to miss), runs to one of 8 ropes and lands a parabolic body slam, then does a victory lap after three knockdowns. A Seller reacts by staggering in the right direction or fighting back, and drops flat on a heavy knockout. A Referee walks to the action and performs a three-phase count. 30 crowd members each run their own tree, cheering on slams and booing on misses. Four behavior trees drive everything, including custom nodes I wrote (an if/else selector, a repeater and a repeat-until-success decorator).",
        type: "Solo project | 2026",
        tags: ["C++", "Behavior Trees", "Game AI"],
        images: [
            "assets/mat-slam/1.png"
        ],
        video: "assets/mat-slam/slam.mp4",
        links: [],
        note: "Source code is private (school project built on a course framework)."
    },

    {
        id: "moustache",
        title: "Moustach've Been The Wind",
        summary: "A 2D speedrunning platformer with a grumpy barber.",
        description: "A 2D speedrunning platformer where a grumpy barber chains glide, dash and ground-pound moves through fast levels.",
        type: "Team of 8 | 2025-2026",
        tags: ["Custom Engine", "C++"],        
        images: [
            "assets/moustache/menu.png",
        ],                        
        video: "assets/moustache/trailer.mp4",                         
        links: [
            //{ label: "Repo", url: "https://lhweemin.github.io/YOUR-REPO/" }
        ],
        note: "Source code is private."
    },
    {
        id: "altho",
        title: "Altho",
        summary: "An app that supports athletes getting back into sport after an injury.",
        description: "A design thinking project where my team designed Altho in Figma, an app for athletes recovering from injury. It has a companion buddy, forums to connect with other athletes and training logs to track progress back to full fitness.",
        type: "Team of 4 | 2025",
        tags: ["Figma", "UI/UX", "Design thinking"],
        images: ["assets/altho/icon.png"],                       
        video: "assets/altho/altho.mp4",
        links: [
            { label: "Figma", url: "https://www.figma.com/design/mSJbIND3p9mWxGYxjJPe9M/2222-Design-Thinking?node-id=0-1&t=XgGfx7tt7rdYsMHt-1" }
        ],
        note: ""
    },
    {
        id: "ecopoint",
        title: "EcoPoint",
        summary: "A recycling app concept where you scan items and earn points.",
        description: "A recycling app designed in Figma for the ProID module in my final year of polytechnic (2023-2024). Users scan what they recycle, collect points, find nearby recycling locations and share tips in a community forum.",
        type: "Team of 4 | 2023-2024",             
        tags: ["Figma", "UI/UX", "Prototyping"],
        images: ["assets/ecopoint/icon.png", "assets/ecopoint/menu.png"],                       
        video: "assets/ecopoint/eco.mp4",
        links: [
            { label: "Figma", url: "https://www.figma.com/design/BMwcK5C1H27y4ncvOsgmYM/ProID?node-id=0-1&t=9IRs2iAGHDjyteQD-1" }]
        ,                        
        note: ""
    },
    {
        id: "band-website",
        title: "Band Website",
        summary: "A front-end website for a BTS album, built for a 2021 school project.",
        description: "A front-end development school project from 2021 where we were free to build a website about anything. I chose to build a BTS album website.",
        type: "Solo project | 2021",             
        tags: ["HTML", "CSS"],             
        images: ["assets/band-web/cover.png"],                      
        video: "",
        links: [],                        
        note: "Source code is private (school project built on a course framework)."
    }
];