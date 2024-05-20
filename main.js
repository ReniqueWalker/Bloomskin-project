<script>
    function showProductDetails(product) {
        let productElement = document.querySelector(
    '[data-product="' + product + '"]'
    );
    if (productElement) {
        let skinType = productElement.getAttribute("data-skin-type");
    let ingredients = productElement.getAttribute("data-ingredients");
    alert(
    "Product: " +
    product +
    "\nIngredients: \n" +
    ingredients +
    "\nBest for: " +
    skinType +
    " skin"
    );
        }
      }
</script>