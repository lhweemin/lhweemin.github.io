(function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var items = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && !reduceMotion) {
        var io = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );
        items.forEach(function (el) {
            io.observe(el);
        });
    } else {
        items.forEach(function (el) {
            el.classList.add("in");
        });
    }
})();

// THEME TOGGLE: classic <-> blocky. The saved choice is applied early by a
// small script in index.html's <head>; this part handles the button.
(function () {
    var root = document.documentElement;
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;

    function isBlocky() {
        return root.getAttribute("data-theme") === "blocky";
    }

    // The button names the theme you will switch TO.
    function updateLabel() {
        btn.textContent = isBlocky() ? "Classic mode" : "Blocky mode";
    }

    updateLabel();

    btn.addEventListener("click", function () {
        var next = isBlocky() ? "classic" : "blocky";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) { }
        updateLabel();
    });
})();