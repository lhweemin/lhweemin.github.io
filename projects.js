// TEMPORARY: draws fake screenshots. Delete this once you have real images.
function fake(text, hue, w, h) {
    var size = Math.round(Math.min(w, h) / 12);
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + " " + h + '">' +
        '<rect width="' + w + '" height="' + h + '" fill="hsl(' + hue + ',55%,88%)"/>' +
        '<text x="' + w / 2 + '" y="' + h / 2 + '" font-family="sans-serif" font-size="' + size + '" fill="hsl(' + hue + ',40%,30%)" text-anchor="middle">' + text + "</text></svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

var projects = [
    {
        id: "matslam",
        title: "Mat-Slam Simulation",
        summary: "A WWE-inspired wrestling simulation where AI wrestlers, a referee and a crowd act out matches using behavior trees.",
        description: "A wrestling match that plays itself, built with behavior trees on a framework from my AI course during my Overseas Immersion Programme in the US. A Slammer finds a target, strikes (with a 30% chance to miss), runs to one of 8 ropes and lands a parabolic body slam, then does a victory lap after three knockdowns. A Seller reacts by staggering in the right direction or fighting back, and drops flat on a heavy knockout. A Referee walks to the action and performs a three-phase count. 30 crowd members each run their own tree, cheering on slams and booing on misses. Four behavior trees drive everything, including custom nodes I wrote (an if/else selector, a repeater and a repeat-until-success decorator).",
        type: "Solo project (school)",
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
        type: "Team of 8",
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
        id: "band-website",
        title: "Band Website",
        summary: "A front-end website for a BTS album, built for a 2021 school project.",
        description: "A front-end development school project from 2021 where we were free to build a website about anything. I chose to build a BTS album website.",
        type: "Solo project",             
        tags: ["HTML", "CSS"],             
        images: ["assets/band-web/cover.png"],                      
        video: "",
        links: [],                        
        note: ""
    }
];