// Task 2: Product Details
let productName = "Laptop";
const productPrice = 999.99;
var isAvailable = false;

console.log("Product Name:", productName, "Type:", typeof productName);
console.log("Product Price:", productPrice, "Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "Type:", typeof isAvailable);

// Task 3: Financial Transactions
let accountBalance = 5000;
accountBalance += 1500; // Deposit
console.log("Updated Balance after Deposit:", accountBalance);
accountBalance -= 700; // Withdrawal
console.log("Updated Balance after Withdrawal:", accountBalance);
accountBalance *= 1.05; // Interest applied
console.log("Updated Balance after Interest:", accountBalance);
accountBalance /= 2; // Half balance
console.log("Updated Balance after Halving:", accountBalance);

// Task 4: Customer Messaging
let customerName = "Jenny";
let welcomeMessage = "Hello, " + customerName + "! Welcome to our store.";
console.log(welcomeMessage);

// Task 5: Access Control
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

// Logical operations
let hasPermission = true;
console.log("Can Access System:", isLoggedIn && hasPermission);
console.log("Needs Login or Permission:", isLoggedIn || hasPermission);
console.log("Access Revoked:", !isLoggedIn);