let product = [];

async function getProducts() {
  try {
    const response = await fetch(
      "https://650d91b2a8b42265ec2c6846.mockapi.io/api/v1/onepiece"
    );
    const data = await response.json();
    products = data;
    displayProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

let products = [
  {
    name: "Monkey D Luffy",
    imageSrc: "../assets/images/luffy.jpg",
    description: "For More Info...",
  },
  {
    name: "Roronoa Zoro",
    imageSrc: "../assets/images/zoro.jpg",
    description: "For More Info...",
  },
  {
    name: "Nami",
    imageSrc: "../assets/images/nami.jpg",
    description: "For More Info...",
  },
  {
    name: "Usopp",
    imageSrc: "../assets/images/usopp.jpg",
    description: "For More Info...",
  },
  {
    name: "Vinsmoke Sanji",
    imageSrc: "../assets/images/sanji.jpg",
    description: "For More Info...",
  },
  {
    name: "Tony Tony Chopper",
    imageSrc: "../assets/images/chopper.jpg",
    description: "For More Info...",
  },
  {
    name: "Nico Robin",
    imageSrc: "../assets/images/robin.jpg",
    description: "For More Info...",
  },
  {
    name: "Franky",
    imageSrc: "../assets/images/franky.jpg",
    description: "For More Info...",
  },
];

let productContainer = document.getElementById("productContainer");
let addProductButton = document.getElementById("addProductButton");
let productNameInput = document.getElementById("productNameInput");
let productImageInput = document.getElementById("productImageInput");
let productDescriptionInput = document.getElementById(
  "productDescriptionInput"
);

function displayProducts() {
  productContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let productDiv = document.createElement("div");
    productDiv.classList.add("box");

    let productImage = document.createElement("img");
    productImage.src = product.imageSrc;

    productImage.style.width = "200px";
    productImage.style.height = "150px";

    productDiv.appendChild(productImage);

    let productName = document.createElement("h3");
    productName.textContent = product.name;
    productDiv.appendChild(productName);

    let productDescription = document.createElement("p");
    productDescription.textContent = product.description;
    productDiv.appendChild(productDescription);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn");
    editButton.addEventListener("click", function () {
      editProduct(i);
    });
    productDiv.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn");
    deleteButton.addEventListener("click", function () {
      deleteProduct(i);
    });
    productDiv.appendChild(deleteButton);

    productContainer.appendChild(productDiv);
  }
}

function addProduct() {
  let newName = productNameInput.value;
  let newImageSrc = productImageInput.value;
  let newDescription = productDescriptionInput.value;

  if (newName && newImageSrc && newDescription) {
    let newProduct = {
      name: newName,
      imageSrc: newImageSrc,
      description: newDescription,
    };

    products.push(newProduct);

    productNameInput.value = "";
    productImageInput.value = "";
    productDescriptionInput.value = "";

    displayProducts();
  } else {
    alert("Please fill in all fields.");
  }
}

function editProduct(index) {
  let updatedName = prompt("Enter the new name:");
  let updatedImageSrc = prompt("Enter the new image URL:");
  let updatedDescription = prompt("Enter the new description:");

  if (updatedName && updatedImageSrc && updatedDescription) {
    products[index].name = updatedName;
    products[index].imageSrc = updatedImageSrc;
    products[index].description = updatedDescription;

    displayProducts();
  } else {
    alert("Please fill in all fields.");
  }
}

function deleteProduct(index) {
  if (confirm("Are you sure you want to delete this product?")) {
    products.splice(index, 1);
    displayProducts();
  }
}

addProductButton.addEventListener("click", addProduct);

displayProducts();
