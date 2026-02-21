document.addEventListener("DOMContentLoaded", () => {
    // Gallery Container targeting
    const gallery = document.getElementById("galleryContainer");

    // Config: total images to generate
    const totalImages = 50;

    // Build fragment to avoid multiple complete reflows
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= totalImages; i++) {
        // Create Card wrapper
        const card = document.createElement("div");
        card.className = "liquid-card";

        // Setup hover effect classes toggles / mouse movement interaction if desired
        // But the primary refraction is handled via SVG filters in CSS

        // Create image wrapper
        const imgWrap = document.createElement("div");
        imgWrap.className = "img-wrapper";

        // Create img tag
        const img = document.createElement("img");
        // Images renamed from 1-50 inside static/images/cats/
        img.src = `static/images/cats/${i}.jpg`;
        img.alt = `可愛圖片 #${i}`;

        // Handle loading error just in case any JPG is missing
        img.onerror = () => {
            img.src = `https://picsum.photos/seed/${i + 140}/400/500?grayscale&blur=2`;
            imgWrap.style.opacity = '0.5';
        };

        // Create text overlay info
        const infoBubble = document.createElement("div");
        infoBubble.className = "card-info";

        const title = document.createElement("h3");
        title.textContent = `Cat #${i}`;

        imgWrap.appendChild(img);
        infoBubble.appendChild(title);

        card.appendChild(imgWrap);
        card.appendChild(infoBubble);



        fragment.appendChild(card);
    }

    // Append to Gallery
    gallery.appendChild(fragment);
});
