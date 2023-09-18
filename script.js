
function greet() {
    alert("Welcome to our Textile Shop!");
}


window.addEventListener("load", function () {
    const products = document.querySelectorAll(".product");

    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = "1";
        }, index * 200);
    });
});

