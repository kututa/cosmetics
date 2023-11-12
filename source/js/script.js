// LE MENU DEROULANT

const togglebtn = document.querySelector(".entete-toggle");
console.log(togglebtn);

const ul = document.querySelector(".ul");
console.log(ul);

togglebtn.addEventListener("click", () => {
  ul.classList.toggle("active");
});

// Le caroussel

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {

  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for next slide
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    // add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  //get current class
  const current = document.querySelector(".current");

  //Remove current class
  current.classList.remove("current");
  // check for previous slide
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    // add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

//Auto slide
if (auto) {
  //Run next slide at intervalle time
  slideInterval = setInterval(nextSlide, intervalTime);
}







  // Initialize an empty array to store the orders
  let orders = [];

  // Function to handle adding the current product to the cart
  function addToCart() {
    // In a real-world scenario, you would get the product information dynamically from the user or an API.
    // For this example, we'll hard-code the product information.
 

    let productName = "Facial Cleanser"; // Replace this with the actual product name
    let productPrice = 1500; // Replace this with the actual product price
    let quantity = parseInt(prompt("Enter the quantity:", "1")); // Prompt the user to enter the quantity

    // Validate the quantity input
    if (isNaN(quantity) || quantity <= 0) {
      alert("Invalid quantity. Please enter a valid number greater than 0.");
      return;
    }

    // Create the productInfo object with name, price, and quantity properties
    let productInfo = {
      name: productName,
      price: productPrice,
      quantity: quantity
    };

    // Add the product information to the orders array
    orders.push(productInfo);

    // Optionally, you can display a message or do further processing here
    alert("Product added to cart!");

    // Let's print the current contents of the cart to see what's in it so far.
    console.log("Current Cart Contents:");
    console.log(orders);
  }
