document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("lightboxModal");
    const modalImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("closeLightbox");
    const galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking anywhere outside the image
    modal.addEventListener("click", function (e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    });
});