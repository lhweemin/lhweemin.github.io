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
        id: "moustache",
        title: "Moustach've Been The Wind",
        summary: "A 2D speedrunning platformer with a grumpy barber.",
        description: "A 2D speedrunning platformer where a grumpy barber chains glide, dash and ground-pound moves through fast levels.",
        type: "Team of 8",
        tags: ["ImGui", "CMake"],          // add your language, for example "C++"
        images: [
            fake("Normal 16:10", 210, 1280, 800),
            fake("Portrait 3:5", 330, 600, 1000),
            fake("Ultrawide 16:5", 30, 1600, 500),
            fake("Square 1:1", 140, 800, 800),
            fake("Normal 16:10 again", 270, 1280, 800)
        ],                        // for example ["images/moustache-1.jpg", "images/moustache-2.jpg"]
        video: "demo",                         // for example "videos/moustache.mp4"
        links: [],
        note: "Source code is private. Demo available on request."
    },
    {
        id: "breakout",
        title: "BreakOut",
        summary: "A single-player prison escape game. Avoid enemies and CCTV.",
        description: "A single-player prison escape game. Avoid enemies and CCTV before time runs out, because once you're caught it's over.",
        type: "Team of 5",
        tags: [],                          // add languages and tools
        images: [],
        video: "",
        links: [],
        note: "Source code is private. Demo available on request."
    },
    {
        id: "cellsurge",
        title: "Cell Surge",
        summary: "A local PvP game where cells eat to grow.",
        description: "A local PvP game where you pick a Ninja or Tank cell, eat to grow, and win best-of-3 across forest, desert and ocean terrains.",
        type: "Team of 4",
        tags: [],                          // add languages and tools
        images: [],
        video: "",
        links: [],
        note: "Source code is private. Demo available on request."
    },
    {
        id: "portfolio",
        title: "This portfolio",
        summary: "A personal site written from scratch, commit by commit.",
        description: "A personal site written from scratch and built commit by commit, hosted free on GitHub Pages.",
        type: "Solo project",
        tags: ["HTML", "CSS", "JavaScript"],
        images: [],
        video: "",
        links: [
            { label: "View on GitHub", url: "https://github.com/lhweemin/lhweemin.github.io" }
        ],
        note: ""
    }
];