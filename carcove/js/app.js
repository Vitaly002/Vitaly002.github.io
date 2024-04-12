/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Tien Vu To
 *      Student ID: 163583222
 *      Date:       Mar 26, 2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Function to create a button for a store category
function createCategoryButton(category) {
  const button = document.createElement('button');
  button.textContent = category.name;
  button.id = category.id;
  button.addEventListener('click', () => showProductList(category));
  return button;
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('card');

  const productImage = document.createElement('img');
  productImage.src = product.imageUrl;
  productImage.classList.add('card-image');
  card.appendChild(productImage);

  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('card-details');

  const titleElem = document.createElement('h2');
  titleElem.textContent = product.title;

  const descriptionElem = document.createElement('h3');
  descriptionElem.textContent = product.description;

  const priceElem = document.createElement('h3');
  priceElem.textContent = (product.price / 100).toLocaleString('en-CA', {
    currency: 'CAD',
    style: 'currency'
  });

  detailsDiv.appendChild(titleElem);
  detailsDiv.appendChild(descriptionElem);
  detailsDiv.appendChild(priceElem);

  card.appendChild(detailsDiv);

  return card;
}

// Event handler to run when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menu');

  // Create buttons for store categories
  categories.forEach(category => {
    const newMenuItem = createCategoryButton(category);
    menu.appendChild(newMenuItem);
  });

  // Show a list of products for the first category
  showProductList(categories[0]);
});

// Show a product list based on a category
function showProductList(category) {
  // Update the text of the Selected Category Title
  document.getElementById('selected-category').textContent = category.name;
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';

  // Filter products based on the chosen category and not discontinued
  const filteredProducts = products.filter(
    product => product.categories.includes(category.id) && !product.discontinued
  );

  // Create product cards and add them to the container
  filteredProducts.forEach(product => {
    const productCard = createProductCard(product);
    productContainer.appendChild(productCard);
  });
}
