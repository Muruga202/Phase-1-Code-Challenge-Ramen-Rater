document.addEventListener('DOMContentLoaded', () => {
    const ramens = [
        { name: "Naruto Ramen", restaurant: "Ichiraku", image: "./Images/naruto.jpg", rating: 8.5, comment: "Favorite of a ninja!" },
        { name: "Nirvana Ramen", restaurant: "Pork Paradise", image: "./Images/nirvana.jpg", rating: 9.2, comment: "Rich pork bone broth" },
        { name: "Kojiro Ramen", restaurant: "Samurai Bites", image: "./Images/kojiro.jpg", rating: 8.0, comment: "Bold and flavorful" },
        { name: "Shoyu Ramen", restaurant: "Tokyo Noodles", image: "./Images/shoyu.jpg", rating: 7.5, comment: "Classic soy-based broth" },
        { name: "Gyukotsu Ramen", restaurant: "Tokyo Noodles", image: "./Images/gyukotsu.jpg", rating: 7.0, comment: "Flat soy-based broth" }
    ];

    const gallery = document.querySelector('.gallery'); // Ensure you select the right div
    const imagePlaceholder = document.querySelector('.image-placeholder');
    const nameElement = document.querySelector('.name');
    const restaurantElement = document.querySelector('.restaurant');
    const ratingElement = document.querySelector('.rating');
    const commentElement = document.querySelector('.comment');

    // Function to display images in gallery
    function displayRamens() {
        gallery.innerHTML = ""; // Clear existing images before adding new ones
        ramens.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.alt = ramen.name;
            img.style.width = "150px"; // Add styling to ensure visibility
            img.style.cursor = "pointer"; // Makes it clickable
            img.addEventListener('click', () => {
                imagePlaceholder.style.backgroundImage = `url(${ramen.image})`;
                nameElement.textContent = ramen.name;
                restaurantElement.textContent = ramen.restaurant;
                ratingElement.textContent = `Rating: ${ramen.rating} / 10`;
                commentElement.textContent = `Comment: ${ramen.comment}`;
            });
            gallery.appendChild(img);
        });
    }

    // Display initial ramen images
    displayRamens();

    // Handle Form Submission for New Ramen Entry
    const form = document.getElementById('ramenForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const newRamen = {
            name: form.name.value,
            restaurant: form.restaurant.value,
            image: form.image.value,
            rating: form.rating.value,
            comment: form.comment.value
        };

        ramens.push(newRamen);
        displayRamens(); // Refresh gallery with new ramen
        form.reset();
    });
});
