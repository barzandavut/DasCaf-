const menu = {
    coffees: {
        hotCoffees: [
            {id: 1, name: "Caffè Americano", price: 120, stock: true, ingredients: ["Espresso", "Sıcak su"]},
            {id: 2, name: "Cortado", price: 120, stock: true, ingredients: ["Espresso Cortado", "Sıcak su"]},
            {id: 3, name: "Fresh Filter Coffee", price: 120, stock: true, ingredients: ["Filtre Kahve",]},
            {id: 4, name: "Caffè Misto", price: 120, stock: true, ingredients: ["Filtre Kahve", "Süt"]},
            {id: 5, name: "Caffè Latte", price: 130, stock: true, ingredients: ["Espresso", "Süt"]},
            {id: 6, name: "Cramel Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu"]},
            {id: 7, name: "Vanilla Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Vanilya Şurubu"]},
            {id: 8, name: "Pumpkin Spice Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Pumpkin Şurubu"]},
            {id: 9, name: "Salted Caremel Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Salted Karamel Şurubu"]},
            {id: 10, name: "Cramel Macchiato", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu"]},
            {id: 11, name: "Cappuccino", price: 130, stock: true, ingredients: ["Espresso", "Süt"]},
            {id: 12, name: "Flat White", price: 130, stock: true, ingredients: ["Espresso", "Süt"]},
            {id: 13, name: "Espresso Macchiato", price: 130, stock: true, ingredients: ["Espresso", "Süt"]},
            {id: 14, name: "Caffè Mocha", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Mocha Sosu", "Krema"]},
            {id: 15, name: "White Chocolate Mocha", price: 140, stock: true, ingredients: ["Espresso", "Süt", "White Mocha Sosu", "Krema"]},
            {id: 16, name: "Chai Tea Latte", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Chai Şurubu"]}
        ],
        coldCoffees: [
            {id: 17, name: "Iced Caffè Americano ", price: 120, stock: true, ingredients: ["Espresso", "Soğuk Su", "Buz"]},
            {id: 18, name: "Iced Coffee", price: 120, stock: true, ingredients: ["Filtre Kahve", "Soğuk su", "Buz"]},
            {id: 19, name: "Iced Cofffee with Misto", price: 120, stock: true, ingredients: ["Filtre Kahve", "Süt", "Buz"]},
            {id: 20, name: "Cold Brew", price: 120, stock: true, ingredients: ["Cold Brew Kahve", "Buz"]},
            {id: 21, name: "Iced Latte", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Buz"]},
            {id: 22, name: "Iced Caremal Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu", "Buz"]},
            {id: 23, name: "Iced Vanilla Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Vanilya Şurubu", "Buz"]},
            {id: 24, name: "Iced Pumkin Spice Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Pumpkin Şurubu", "Buz"]},
            {id: 25, name: "Iced Salted Cramel Latte", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Salted Karamel Şurubu", "Buz"]},
            {id: 26, name: "Iced Cramel Macchiato", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu", "Buz"]},
            {id: 27, name: "Iced Cappuccino", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Buz"]},
            {id: 28, name: "Iced Flat Wahite", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Buz"]},
            {id: 29, name: "Iced Espresso Macchiato", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Buz"]},
            {id: 30, name: "Iced Caffe Mocha", price: 140, stock: true, ingredients: ["Espresso", "Süt", "Mocha Sosu", "Krema", "Buz"]},
            {id: 31, name: "Iced White Chocolate Mocha", price: 140, stock: true, ingredients: ["Espresso", "Süt", "White Mocha Sosu", "Krema", "Buz"]},
            {id: 32, name: "Iced Chai Tea Latte", price: 130, stock: true, ingredients: ["Espresso", "Süt", "Chai Şurubu", "Buz"]},
            {id: 33, name: "Java Chip Frappuccino", price: 150, stock: true, ingredients: ["Espresso", "Süt", "Java Chip Parçacıkları", "Mocha Sosu", "Buz"]},
            {id: 34, name: "Caramel Frappuccino", price: 150, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu", "Buz"]},
            {id: 35, name: "White Chocolate Frappuccino", price: 150, stock: true, ingredients: ["Espresso", "Süt", "White Mocha Sosu", "Krema", "Buz"]},
            {id: 36, name: "Strawberries Cream Frappuccino", price: 150, stock: true, ingredients: ["Espresso", "Süt", "Çilek Parçaçcıkları", "Buz"]},
            {id: 37, name: "Caramel Cream Frappuccino", price: 150, stock: true, ingredients: ["Espresso", "Süt", "Karamel Şurubu", "Buz"]},
        ]
    },
    Refresha: [
        {id: 38, name: "Berry Hibiscus Refresha", price: 140, stock: true, ingredients: ["Berry Özü", "Berry Parçacıkları", "Buz"]},
        {id: 39, name: "Orange Mango Refresha", price: 140, stock: true, ingredients: ["Mango Özü", "Orange Parçacıkları", "Buz"]},
        {id: 40, name: "Cool Lime Refresha", price: 140, stock: true, ingredients: ["Lime Özü", "Lime Parçacıkları", "Buz"]},
        {id: 41, name: "Mango Dragonfruit Refresha", price: 140, stock: true, ingredients: ["Mango Özü", "Dragonfruit Parçacıkları", "Buz"]},
        {id: 42, name: "Frozen Mango Dragon Latte", price: 140, stock: true, ingredients: ["Mango Özü", "Frozen Parçacıkları", "Süt", "Buz"]},
    ]
};
let sepet = [];

// yardımcı: id'den ürün bul
function urunBulById(id) {
    return tumUrunler.find(function(u) { return u.id === id; });
}

// sepete ekleme
function sepeteEkle(urunId) {
    const urun = urunBulById(urunId);
    if (urun) {
        sepet.push(urun);
        console.log(`${urun.name} sepete eklendi.`);
        renderCart();
    } else {
        console.log("Ürün bulunamadı.");
    }
}

// fiş yazdırma
function fisOlustur() {
    let toplam = 0;
    let fisMetni = "📜 Fiş:\n--------------------\n";

    sepet.forEach(item => {
        fisMetni += `${item.name} - ${item.price} ₺\n`;
        toplam += item.price;
    });

    fisMetni += "--------------------\n";
    fisMetni += `Toplam: ${toplam} ₺`;

    console.log(fisMetni);

    // ekranda göstermek için (varsa)
    const fisEl = document.getElementById("fis");
    if (fisEl) {
        fisEl.innerText = fisMetni;
    }
}

// sepet tablosunu çiz
function renderCart() {
    const tbody = document.getElementById("cartBody");
    const totalEl = document.getElementById("cartTotal");
    if (!tbody || !totalEl) return;

    let toplam = 0;
    tbody.innerHTML = "";

    sepet.forEach(function(item) {
        toplam += item.price;
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdPrice = document.createElement("td");
        tdName.textContent = item.name;
        tdPrice.textContent = `${item.price} ₺`;
        tr.appendChild(tdName);
        tr.appendChild(tdPrice);
        tbody.appendChild(tr);
    });

    totalEl.textContent = `${toplam} ₺`;
}

const tumUrunler = [
    ...menu.coffees.hotCoffees,
    ...menu.coffees.coldCoffees,
    ...menu.Refresha
];

const menuList = document.getElementById("menuList");
menuList.classList.add("row", "g-3");

tumUrunler.forEach(item => {
    // ürün kartı
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4 mb-3";

    const card = document.createElement("div");
    card.className = "border p-2 rounded bg-light text-dark";

    // ürün adı + fiyat
    const title = document.createElement("p");
    title.textContent = `${item.id} - ${item.name} (${item.price} ₺)`;
    title.className = "fw-bold mb-1";
    title.style.cursor = "pointer";

    // içerikler (başta gizli)
    const ingredients = document.createElement("div");
    ingredients.className = "d-none ms-3 text-muted";
    ingredients.innerHTML = `<strong>İçindekiler:</strong><br> ${item.ingredients.join(", ")}`;

    // toggle
    title.addEventListener("click", () => {
        ingredients.classList.toggle("d-none");
    });

    // sepete ekle butonu
    const addBtn = document.createElement("button");
    addBtn.className = "btn btn-sm btn-dark opacity-75 mt-2";
    addBtn.textContent = "Sepete Ekle";
    addBtn.addEventListener("click", function() {
        sepeteEkle(item.id);
    });

    card.appendChild(title);
    card.appendChild(ingredients);
    card.appendChild(addBtn);
    col.appendChild(card);
    menuList.appendChild(col);
});


// başlangıçta boş sepeti yansıt
renderCart();

