document.getElementById("toggleMode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
}
)
;

document.getElementById("swapImageBtn").addEventListener("click", function () {
    const img = document.getElementById("changeableImage");

    img.src = img.src.includes("sydney.jpg")
        ? "media/sydney2.jpg"
        : "media/sydney.jpg";
}
)
;
