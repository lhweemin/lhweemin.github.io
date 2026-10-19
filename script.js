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

(function () {
    var list = document.getElementById("project-list");
    var modals = document.getElementById("project-modals");
    if (!list || !modals || typeof projects === "undefined") return;

    var smooth = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    projects.forEach(function (p) {
        var images = p.images || [];
        var tags = (p.tags || []).map(function (t) { return "<li>" + t + "</li>"; }).join("");
        var thumb = images.length
            ? '<img src="' + images[0] + '" alt="' + p.title + ' screenshot">'
            : "<span>Screenshot coming soon</span>";

        var video = "";
        if (p.video === "demo") {
            video = '<div class="modal-media demo">&#9654;&nbsp; Video goes here</div>';
        } else if (p.video) {
            video = '<div class="modal-media"><video controls preload="none" playsinline' +
                (images.length ? ' poster="' + images[0] + '"' : "") +
                ' src="' + p.video + '"></video></div>';
        }

        var gallery = "";
        if (images.length) {
            var imgs = images.map(function (src, i) {
                return '<img src="' + src + '" alt="' + p.title + " screenshot " + (i + 1) + '" loading="lazy">';
            }).join("");
            var arrows = images.length > 3
                ? '<button class="gal-btn gal-prev" data-gal="-1" aria-label="Previous images">&lsaquo;</button>' +
                '<button class="gal-btn gal-next" data-gal="1" aria-label="Next images">&rsaquo;</button>'
                : "";
            gallery = '<div class="gallery">' + arrows + '<div class="gal-track">' + imgs + "</div></div>";
        }

        var links = (p.links || []).map(function (l) {
            return '<a class="text-link" href="' + l.url + '">' + l.label + " &rarr;</a>";
        }).join("");
        var note = p.note ? '<p class="note">' + p.note + "</p>" : "";

        list.insertAdjacentHTML("beforeend",
            '<article class="card">' +
            '<div class="thumb">' + thumb + "</div>" +
            '<div class="card-body">' +
            '<h3><button class="card-link" data-open="dlg-' + p.id + '">' + p.title + "</button></h3>" +
            "<p>" + p.summary + "</p>" +
            "</div>" +
            "</article>"
        );

        modals.insertAdjacentHTML("beforeend",
            '<dialog class="modal" id="dlg-' + p.id + '" aria-labelledby="t-' + p.id + '">' +
            '<button class="modal-close" data-close aria-label="Close">&times;</button>' +
            video + gallery +
            '<div class="modal-body">' +
            '<h3 id="t-' + p.id + '">' + p.title + "</h3>" +
            "<p>" + p.description + "</p>" +
            '<p class="badge">' + p.type + "</p>" +
            '<ul class="tags">' + tags + "</ul>" +
            note + links +
            "</div>" +
            "</dialog>"
        );
    });

    document.addEventListener("click", function (e) {
        var opener = e.target.closest("[data-open]");
        if (opener) {
            var d = document.getElementById(opener.getAttribute("data-open"));
            if (d) d.showModal();
            return;
        }

        var arrow = e.target.closest("[data-gal]");
        if (arrow) {
            var track = arrow.parentElement.querySelector(".gal-track");
            var dir = Number(arrow.getAttribute("data-gal"));
            track.scrollBy({ left: dir * (track.clientWidth + 12), behavior: smooth });
            return;
        }

        var dlg = e.target.closest("dialog.modal");
        if (dlg && (e.target === dlg || e.target.closest("[data-close]"))) dlg.close();
    });

    document.addEventListener("close", function (e) {
        var v = e.target.querySelector && e.target.querySelector("video");
        if (v) v.pause();
    }, true);
})();