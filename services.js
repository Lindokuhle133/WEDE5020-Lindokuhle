// ==========================================
// 1. DYNAMIC CONTENT & SEARCH/FILTER LOGIC
// ==========================================
const menuItems = [
    { name: "Signature Espresso Roast", category: "Coffee", price: "R150 / 250g", desc: "Rich, bold dark roast with notes of dark chocolate and caramel." },
    { name: "Free State Gold Blend", category: "Coffee", price: "R140 / 250g", desc: "Smooth medium roast with a bright citrus finish." },
    { name: "Decaf African Beans", category: "Coffee", price: "R160 / 250g", desc: "Full-bodied flavour without the caffeine kick." },
    { name: "Fresh Butter Croissant", category: "Bakery", price: "R35", desc: "Flaky, golden pastry baked fresh every single morning." },
    { name: "Chocolate Muffin", category: "Bakery", price: "R30", desc: "Rich double-chocolate chip muffin loaded with cocoa." },
    { name: "Corporate Coffee & Pastry Setup", category: "Catering", price: "R85 per person", desc: "Full mobile coffee bar service with barista and pastries for events." }
];

const container = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function displayItems(items) {
    container.innerHTML = "";
    if (items.length === 0) {
        container.innerHTML = "<p>No matching items found.</p>";
        return;
    }

    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'service-card';
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p>${item.desc}</p>
        `;
        container.appendChild(card);
    });
}

// Initial load
displayItems(menuItems);

// Search & Filter Event Listeners
function filterMenu() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filtered = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || item.desc.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayItems(filtered);
}

searchInput.addEventListener('input', filterMenu);
categoryFilter.addEventListener('change', filterMenu);

// ==========================================
// 2. INTERACTIVE ACCORDION FUNCTIONALITY
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
        acc.addEventListener("click", function () {
            this.classList.toggle("active");
            const panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    });
});