//toggle mobile navbar
const togglebtn = document.getElementById("togglebtn");
const menu = document.getElementById("mobile_menu");

togglebtn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});

// Add to cart and cart count
const add_cart = document.querySelectorAll("button");
let cartcount = 0;
const cart_count_element = document.querySelector("span");

for (let i = 0; i < add_cart.length; i++) {
    add_cart[i].addEventListener("click", function () {
        if (this.classList.contains("added")) {
            this.classList.remove("added");
            this.style.backgroundColor = "black";
            this.textContent = "Add to Cart";
            cartcount--;
        } else {
            this.classList.add("added");
            this.style.backgroundColor = "red";
            this.textContent = "Remove from Cart";
            cartcount++;
        }
        cart_count_element.textContent = cartcount;
    });

}

//filtering products
const all_checkboxes = document.querySelectorAll("#desktop_filter input[type='checkbox'], #mobile_filter input[type='checkbox']");

const all_products = document.querySelectorAll("[data-category]");

for (let i = 0; i < all_checkboxes.length; i++) {
    all_checkboxes[i].addEventListener("change", filter);
}

function filter() {
    let selected_category = new Set();

    for (let i = 0; i < all_checkboxes.length; i++) {
        if (all_checkboxes[i].checked) {
            let category = all_checkboxes[i].parentElement.textContent.trim().toLowerCase();
            selected_category.add(category);
        }
    }

    for (let j = 0; j < all_products.length; j++) {
        let product = all_products[j];
        let category = product.getAttribute("data-category").toLowerCase();

        if (selected_category.size === 0 || selected_category.has(category)) {
            product.parentElement.parentElement.style.display = "block";
        } else {
            product.parentElement.parentElement.style.display = "none";  
        }
    }
}
