
document.addEventListener("DOMContentLoaded", function() {
    const viewDetailsLink = document.querySelector(".view-details");
    const fullDescription = document.querySelector(".full-description");
    const cancelBtn = document.querySelector(".cancel-btn");
    const portfolioCard = document.querySelector(".portfolio-card");

    viewDetailsLink.addEventListener("click", function(event) {
        event.preventDefault();
        fullDescription.style.display = "block";
        portfolioCard.classList.add("hide-background");
    });

    cancelBtn.addEventListener("click", function(event) {
        event.preventDefault();
        fullDescription.style.display = "none";
        portfolioCard.classList.remove("hide-background");
    });
});
