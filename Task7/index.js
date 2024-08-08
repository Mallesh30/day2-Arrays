const products = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 1200,
    quantity: 10,
    available: true,
  },
  {
    name: "Chair",
    category: "Furniture",
    price: 100,
    quantity: 20,
    available: true,
  },
  {
    name: "Shirt",
    category: "Clothing",
    price: 30,
    quantity: 50,
    available: false,
  },
  {
    name: "Book",
    category: "Books",
    price: 20,
    quantity: 100,
    available: true,
  },
];

const filteredProducts = products.filter((product) => product.available);

console.log("Filtered Products:");
console.log(filteredProducts);

const sortedProducts = products.slice().sort((a, b) => a.price - b.price);

console.log("Sorted Products by Price:");
console.log(sortedProducts);

const productsWithTotalValue = products.map((product) => ({
  ...product,
  totalValue: product.price * product.quantity,
}));

console.log("Products with Total Value:");
console.log(productsWithTotalValue);

const totalProducts = products.length;
const totalValue = products.reduce(
  (acc, product) => acc + product.price * product.quantity,
  0
);
const avgPrice = totalValue / totalProducts;

const categoryDistribution = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] || 0) + 1;
  return acc;
}, {});

const inventoryReport = {
  totalProducts,
  totalValue,
  avgPrice,
  categoryDistribution,
};

console.log("Inventory Report:");
console.log(inventoryReport);
