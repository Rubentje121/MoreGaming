// Bezorgdatum berekenen (20 dagen vanaf vandaag)
function getDeliveryDate() {
    const today = new Date();
    today.setDate(today.getDate() + 20);

    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
}

// Bezorgdatum invoegen bij alle elementen met .delivery-date
function setDeliveryDates() {
    const deliveryDate = getDeliveryDate();
    document.querySelectorAll('.delivery-date').forEach(el => {
        el.textContent = deliveryDate;
    });
}

// Dynamisch sale-producten laden
function updateSaleProducts() {
    const saleProducts = [
        {
            name: "Fortnite Gaming Headset",
            oldPrice: "€39,99",
            newPrice: "€15,99",
            image: "https://example.com/fortnite-headset.jpg"
        },
        {
            name: "Logitech Gaming Mouse",
            oldPrice: "€59,99",
            newPrice: "€29,99",
            image: "https://example.com/logitech-mouse.jpg"
        },
        {
            name: "Razer Gaming Keyboard",
            oldPrice: "€99,99",
            newPrice: "€49,99",
            image: "https://example.com/razer-keyboard.jpg"
        },
        {
            name: "Fortnite Phone Case",
            oldPrice: "€19,99",
            newPrice: "€9,99",
            image: "https://example.com/fortnite-phone-case.jpg"
        },
        {
            name: "Gaming Chair",
            oldPrice: "€150,00",
            newPrice: "€99,99",
            image: "https://example.com/gaming-chair.jpg"
        },
    ];

    const container = document.getElementById("sale-products");
    container.innerHTML = saleProducts.map(product => `
        <div class="product sale-product">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p class="old-price">Old Price: ${product.oldPrice}</p>
            <p class="new-price">${product.newPrice}</p>
        </div>
    `).join('');
}

// Countdown tot middernacht
function startCountdown() {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    const countdownElement = document.getElementById("countdown");

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const remaining = midnight - now;

        if (remaining < 0) {
            clearInterval(timer);
            countdownElement.textContent = "New sale starts!";
            updateSaleProducts();
            return;
        }

        const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Alles activeren bij pagina-laden
window.addEventListener('DOMContentLoaded', () => {
    setDeliveryDates();
    updateSaleProducts();
    startCountdown();
});
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('open');
}

