'use strict';

/* =========================================
   1. PROIZVODI
   ========================================= */

const DEFAULT_PRODUCTS = [
    { id: 'p1', name: 'Božićni anđeli - 3D ukras za drvce', category: 'Božićni program', price: 1, description: 'Božićni anđeo - prodaja po komadu.', image: 'images/1.jpg' },
    { id: 'p2', name: 'Božićni kolačići za drvce', category: 'Božićni program', price: 5, description: 'Set od pet ukrasa.', image: 'images/2.jpg' },
    { id: 'p3', name: 'Topper za tortu', category: 'Božićni program', price: 9, description: 'Personalizirani topper za posebne prigode.', image: 'images/3.jpg' },
    { id: 'p4', name: 'Božićni ukras s imenom', category: 'Božićni program', price: 6, description: 'Jedinstveni ukras s osobnom porukom.', image: 'images/4.jpg' },
    { id: 'p5', name: 'Spomen pločica', category: 'Božićni program', price: 12, description: 'Pločica s citatom ili posvetom.', image: 'images/5.jpg' },
    { id: 'p6', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/6.jpg' },
    { id: 'p7', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/7.jpg' },
    { id: 'p8', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/8.jpg' },
    { id: 'p9', name: 'Uskrsna dekoracija', category: 'Božićni program s imenom', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/9.jpg' },
    { id: 'p10', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/10.jpg' },
    { id: 'p11', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/11.jpg' },
    { id: 'p12', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/12.jpg' },
    { id: 'p13', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/13.jpg' },
    { id: 'p14', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/14.jpg' },
    { id: 'p15', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/15.jpg' },
    { id: 'p16', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/16.jpg' },
    { id: 'p17', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/17.jpg' },
    { id: 'p18', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/18.jpg' },
    { id: 'p19', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/19.jpg' },
    { id: 'p20', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/20.jpg' },
    { id: 'p21', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/21.jpg' },
    { id: 'p22', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/22.jpg' },
    { id: 'p23', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/23.jpg' },
    { id: 'p24', name: 'Uskrsna dekoracija', category: 'Božićni program', price: 14, description: 'Prigodna dekoracija za vaš dom.', image: 'images/24.jpg' }
];

/* =========================================
   2. BOJE I POMOĆNE FUNKCIJE
   ========================================= */

const AVAILABLE_COLORS = [
    { name: 'Crvena', hex: '#e53935' },
    { name: 'Žuta', hex: '#fdd835' },
    { name: 'Svijetlo plava', hex: '#81d4fa' },
    { name: 'Tamno plava', hex: '#174ea6' },
    { name: 'Bijela', hex: '#ffffff' },
    { name: 'Crna', hex: '#252525' },
    { name: 'Zlatna 18k', hex: '#d4af37' },
    { name: 'Tamno zlatna', hex: '#9a7028' },
    { name: 'Smeđa', hex: '#795548' },
    { name: 'Svijetlo zelena', hex: '#a5d66a' },
    { name: 'Tamno zelena', hex: '#216e39' },
    { name: 'Siva', hex: '#9e9e9e' },
    { name: 'Maslinasto zelena', hex: '#808000' },
    { name: 'Transparentno crvena', hex: 'rgba(229,57,53,0.55)' },
    { name: 'Roza', hex: '#f48fb1' },
    { name: 'Ljubičasta', hex: '#9c27b0' }
];

const money = (amount) => Number(amount).toLocaleString('hr-HR', {
    style: 'currency',
    currency: 'EUR'
});

const $ = (selector) => document.querySelector(selector);

const on = (selector, event, callback) => {
    const element = $(selector);
    if (element) element.addEventListener(event, callback);
    return element;
};

const safe = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
})[character]);

const getColor = (name) => AVAILABLE_COLORS.find((color) => color.name === name);

/* =========================================
   3. INICIJALIZACIJA I SPREMANJE KOŠARICE
   ========================================= */

const products = DEFAULT_PRODUCTS;
let cart = [];
let selectedProductForColor = null;
let selectedColor = '';

try {
    const savedCart = JSON.parse(localStorage.getItem('lakyMakyCart') || '[]');

    if (Array.isArray(savedCart)) {
        cart = savedCart
            .filter((item) =>
                products.some((product) => product.id === item.id) &&
                Number.isInteger(item.qty) &&
                item.qty > 0
            )
            .map((item) => {
                const product = products.find((product) => product.id === item.id);
                const color = getColor(item.color) ? item.color : '';
                return {
                    ...product,
                    cartItemId: item.cartItemId || `${item.id}-${color || 'bez-boje'}-${Math.random().toString(36).slice(2, 9)}`,
                    color,
                    qty: Math.min(item.qty, 99)
                };
            });
    }
} catch (error) {
    cart = [];
}

function saveCart() {
    try {
        localStorage.setItem('lakyMakyCart', JSON.stringify(
            cart.map(({ id, qty, color, cartItemId }) => ({
                id, qty, color, cartItemId
            }))
        ));
    } catch (error) {
        // Košarica radi i bez lokalne pohrane.
    }
}

/* =========================================
   4. KARTICE PROIZVODA I KATALOG
   ========================================= */

function productCards(selectedProducts) {
    if (!selectedProducts.length) {
        return '<p>Nema proizvoda za odabrani filter.</p>';
    }

    return selectedProducts.map((product) => `
        <article class="product">
            <div class="product-image">
                ${product.image
                    ? `<img src="${safe(product.image)}" alt="${safe(product.name)}" loading="lazy">`
                    : `<div class="placeholder"><img src="images/logo-mark.png" alt="">Laky & Maky</div>`
                }
            </div>
            <div class="product-info">
                <small>${safe(product.category)}</small>
                <h3>${safe(product.name)}</h3>
                <p>${safe(product.description)}</p>
                <div class="product-bottom">
                    <strong>${money(product.price)}</strong>
                    <button type="button" data-add="${safe(product.id)}">+ U košaricu</button>
                </div>
            </div>
        </article>
    `).join('');
}

function renderProducts() {
    const searchInput = $('#search');
    const categorySelect = $('#category');
    const productsContainer = $('#products');

    if (!searchInput || !categorySelect || !productsContainer) return;

    const query = searchInput.value.toLocaleLowerCase('hr');
    const category = categorySelect.value;

    const filteredProducts = products.filter((product) => {
        const matchesCategory = !category || product.category === category;
        const searchableText = `${product.name} ${product.description} ${product.category}`.toLocaleLowerCase('hr');
        return matchesCategory && searchableText.includes(query);
    });

    productsContainer.innerHTML = productCards(filteredProducts);
}

function initCatalog() {
    const categorySelect = $('#category');
    if (!$('#products') || !$('#search') || !categorySelect) return;

    const categories = [...new Set(products.map((product) => product.category))];
    categorySelect.innerHTML = '<option value="">Sve kategorije</option>' + categories
        .map((category) => `<option value="${safe(category)}">${safe(category)}</option>`)
        .join('');

    on('#search', 'input', renderProducts);
    on('#category', 'change', renderProducts);

    on('#products', 'click', (event) => {
        const button = event.target.closest('[data-add]');
        if (button) addProduct(button.dataset.add);
    });

    renderProducts();
}

function initFeaturedProducts() {
    const container = $('#featuredProducts');
    if (!container) return;

    container.innerHTML = productCards(products.slice(0, 3));
    container.addEventListener('click', (event) => {
        const button = event.target.closest('[data-add]');
        if (button) addProduct(button.dataset.add);
    });
}

/* =========================================
   5. ODABIR BOJE
   ========================================= */

function openColorModal(productId) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    const modal = $('#colorModal');
    const options = $('#colorOptions');
    const productName = $('#colorProductName');
    const error = $('#colorError');

    if (!modal || !options || !productName) {
        alert('Nedostaje HTML prozor za odabir boje. Provjerite index.html i katalog.html.');
        return;
    }

    selectedProductForColor = product;
    selectedColor = '';
    productName.textContent = product.name;
    error.textContent = '';

    options.innerHTML = AVAILABLE_COLORS.map((color, index) => `
        <button
            type="button"
            class="color-option"
            data-color="${safe(color.name)}"
            aria-label="${safe(color.name)}"
            aria-pressed="false"
            title="${safe(color.name)}"
        >
            <span class="color-swatch ${index === 4 ? 'swatch-light' : ''}"
                  style="--swatch-color:${color.hex}"></span>
            <span class="color-option-name">${safe(color.name)}</span>
        </button>
    `).join('');

    updateSelectedColorLabel();
    modal.classList.remove('hidden');
    $('#confirmColor')?.focus();
}

function updateSelectedColorLabel() {
    const label = $('#selectedColorLabel');
    if (!label) return;

    label.innerHTML = `Odabrana boja: <strong>${safe(selectedColor || 'Nije odabrana')}</strong>`;
}

function closeColorModal() {
    $('#colorModal')?.classList.add('hidden');
    selectedProductForColor = null;
    selectedColor = '';
}

on('#colorOptions', 'click', (event) => {
    const button = event.target.closest('[data-color]');
    if (!button) return;

    selectedColor = button.dataset.color;

    $('#colorOptions')?.querySelectorAll('[data-color]').forEach((option) => {
        const active = option.dataset.color === selectedColor;
        option.classList.toggle('selected', active);
        option.setAttribute('aria-pressed', String(active));
    });

    $('#colorError').textContent = '';
    updateSelectedColorLabel();
});

on('#confirmColor', 'click', () => {
    if (!selectedProductForColor) return;

    if (!getColor(selectedColor)) {
        $('#colorError').textContent = 'Molimo odaberite boju prije dodavanja u košaricu.';
        return;
    }

    const product = selectedProductForColor;
    const existingItem = cart.find((item) =>
        item.id === product.id && item.color === selectedColor
    );

    if (existingItem) {
        existingItem.qty = Math.min(existingItem.qty + 1, 99);
    } else {
        cart.push({
            ...product,
            color: selectedColor,
            cartItemId: `${product.id}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
            qty: 1
        });
    }

    closeColorModal();
    renderCart();
    toggleCart(true);
});

on('#closeColorModal', 'click', closeColorModal);
on('#colorModal', 'click', (event) => {
    if (event.target.id === 'colorModal') closeColorModal();
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !$('#colorModal')?.classList.contains('hidden')) {
        closeColorModal();
    }
});

/* =========================================
   6. KOŠARICA
   ========================================= */

function addProduct(productId) {
    openColorModal(productId);
}

function renderCart() {
    const cartCount = $('#cartCount');
    const cartItems = $('#cartItems');
    const totalElement = $('#total');

    saveCart();
    if (!cartCount || !cartItems || !totalElement) return;

    const totalQuantity = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

    cartCount.textContent = totalQuantity;

    if (cart.length) {
        cartItems.innerHTML = cart.map((item) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${safe(item.name)}</strong>
                    <br><span class="cart-color">Boja: ${safe(item.color || 'Nije odabrana')}</span>
                    <br><span>${money(item.price)} × ${item.qty}</span>
                    <br><strong class="cart-item-subtotal">${money(item.price * item.qty)}</strong>
                </div>
                <div class="cart-quantity">
                    <button type="button" data-minus="${safe(item.cartItemId)}" aria-label="Smanji količinu">−</button>
                    <span>${item.qty}</span>
                    <button type="button" data-plus="${safe(item.cartItemId)}" aria-label="Povećaj količinu">+</button>
                    <button type="button" class="remove-item" data-remove="${safe(item.cartItemId)}" aria-label="Ukloni proizvod">×</button>
                </div>
            </div>
        `).join('');
    } else {
        cartItems.innerHTML = '<p>Vaša košarica je prazna.</p>';
    }

    totalElement.textContent = money(totalPrice);
}

function toggleCart(show) {
    const drawer = $('#drawer');
    const overlay = $('#overlay');
    if (!drawer || !overlay) return;

    drawer.classList.toggle('hidden', !show);
    overlay.classList.toggle('hidden', !show);
}

function changeQuantity(cartItemId, change) {
    const item = cart.find((product) => product.cartItemId === cartItemId);
    if (!item) return;

    item.qty = Math.max(0, Math.min(item.qty + change, 99));
    cart = cart.filter((product) => product.qty > 0);
    renderCart();
}

on('#cartItems', 'click', (event) => {
    const button = event.target.closest('[data-plus], [data-minus], [data-remove]');
    if (!button) return;

    if (button.dataset.plus) changeQuantity(button.dataset.plus, 1);
    if (button.dataset.minus) changeQuantity(button.dataset.minus, -1);
    if (button.dataset.remove) {
        cart = cart.filter((item) => item.cartItemId !== button.dataset.remove);
        renderCart();
    }
});

on('#cartBtn', 'click', () => toggleCart(true));
on('#closeCart', 'click', () => toggleCart(false));
on('#overlay', 'click', () => toggleCart(false));

/* =========================================
   7. NAVIGACIJA I PODNOŽJE
   ========================================= */

on('#menuBtn', 'click', () => $('#nav')?.classList.toggle('open'));
on('#nav', 'click', (event) => {
    if (event.target.closest('a')) $('#nav')?.classList.remove('open');
});

const yearElement = $('#year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

/* =========================================
   8. DOSTAVA
   ========================================= */

function syncDelivery() {
    const delivery = $('#delivery');
    const shippingFields = $('#shipFields');
    const phone = $('#phone');
    const phoneLabel = $('#phoneLabel');

    if (!delivery || !shippingFields || !phone || !phoneLabel) return;

    const shipping = delivery.value === 'Slanje dostavom';
    shippingFields.classList.toggle('hidden', !shipping);
    shippingFields.disabled = !shipping;
    phone.required = shipping;
    phoneLabel.textContent = shipping ? 'Broj mobitela *' : 'Telefon';
}

on('#delivery', 'change', syncDelivery);
on('#orderForm', 'reset', () => setTimeout(syncDelivery, 0));

/* =========================================
   9. SLANJE UPITA ZA NARUDŽBU
   ========================================= */

on('#orderForm', 'submit', async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const status = $('#formStatus');
    const button = form.querySelector('[type="submit"]');

    if (!cart.length) {
        status.textContent = 'Dodajte proizvod u košaricu.';
        return;
    }

    const formData = Object.fromEntries(new FormData(form));
    formData.name = `${formData.firstName} ${formData.lastName}`.trim();
    formData.address = formData.delivery === 'Slanje dostavom'
        ? `${formData.street} ${formData.houseNumber}, ${formData.postalCode} ${formData.city}`
        : '';

    const payload = {
        customer: formData,
        items: cart.map(({ id, name, price, qty, color }) => ({
            id, name, price, qty, color
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    };

    button.disabled = true;
    status.textContent = 'Pripremamo upit...';

    try {
        const endpoint = window.LAKY_CONFIG?.orderEndpoint;

        if (endpoint) {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) throw new Error('Poslužitelj nije prihvatio narudžbu.');

            status.textContent = 'Upit je uspješno poslan!';
            cart = [];
            renderCart();
            form.reset();
        } else {
            const itemsText = payload.items.map((item) =>
                `${item.name} | Boja: ${item.color || 'Nije odabrana'} | Količina: ${item.qty} | Cijena: ${money(item.price * item.qty)}`
            ).join('\n');

            const body = `
Novi upit za narudžbu

${itemsText}

Ukupno: ${money(payload.total)}

Ime: ${formData.name}
E-mail: ${formData.email}
Telefon: ${formData.phone || ''}
Preuzimanje: ${formData.delivery}
Adresa: ${formData.address}
Napomene: ${formData.note || ''}
            `.trim();

            const subject = encodeURIComponent('Upit za narudžbu – Laky & Maky');
            const encodedBody = encodeURIComponent(body);
            const mailtoUrl = `mailto:lakymaky0311@gmail.com?subject=${subject}&body=${encodedBody}`;

            status.textContent = 'Otvoren je vaš e-mail program. Potvrdite slanje poruke kako bi upit stigao.';
            window.location.href = mailtoUrl;
        }
    } catch (error) {
        status.textContent = 'Slanje nije uspjelo. Pokušajte ponovno ili nam pišite izravno na e-mail.';
    } finally {
        button.disabled = false;
    }
});

/* =========================================
   10. POKRETANJE APLIKACIJE
   ========================================= */

initCatalog();
initFeaturedProducts();
renderCart();
syncDelivery();
