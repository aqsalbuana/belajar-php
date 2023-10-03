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

  let buyButton = document.createElement("a");
  buyButton.href = "#";
  buyButton.textContent = "Buy";
  buyButton.classList.add("btn");
  productDiv.appendChild(buyButton);

  productContainer.appendChild(productDiv);
}
