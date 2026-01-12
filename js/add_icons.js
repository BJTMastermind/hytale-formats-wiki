for (const e of document.getElementsByClassName("addicon")) {
    const icons = e.className.split("addicon ")[1].split(" ")

    for (const icon of icons.reverse()) {
        const subfolder = icon.split(".")[0];
        const file = icon.split(".")[1];

        const img = document.createElement("img");
        img.src = `${window.location.origin}/images/${subfolder}/${file}.png`;
        img.width = 16;
        img.height = 16;
        img.style.padding = "0";
        img.style.margin = "0 3px 0 0";
        e.insertBefore(img, e.firstChild);
    }
}
