document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("galleryContainer");
    const totalImages = 50;
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= totalImages; i++) {
        const card = document.createElement("div");
        card.className = "liquid-card";

        const imgWrap = document.createElement("div");
        imgWrap.className = "img-wrapper";

        const img = document.createElement("img");
        img.src = `static/images/cats/${i}.jpg`;
        img.alt = `可愛圖片 #${i}`;

        img.onerror = () => {
            img.src = `https://picsum.photos/seed/${i + 140}/400/500?grayscale&blur=2`;
            imgWrap.style.opacity = '0.5';
        };

        const infoBubble = document.createElement("div");
        infoBubble.className = "card-info";

        const title = document.createElement("h3");
        title.textContent = ` #${i}`;

        imgWrap.appendChild(img);
        infoBubble.appendChild(title);

        card.appendChild(imgWrap);
        card.appendChild(infoBubble);

        fragment.appendChild(card);
    }

    gallery.appendChild(fragment);
});
