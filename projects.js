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
        tags: ["Custom Engine", "C++"],        
        images: [
            "assets/moustache/menu.png",
        ],                        
        video: "assets/moustache/trailer.mp4",                         
        links: [],
        note: "Source code is private."
    }
];