// Entry point of the application
main()

function main() {
    // Initial welcome messages
    alert("Welcome to the Managment Lab");
    console.log("Welcome to Managment Lab");

    // Controls the main application loop
    let whileFlag = 0

    // Main program loop
    while (whileFlag !== 1) {
        option = principalMenu()

        switch (option) {

            // Products management section
            case 1:
                let whileFlag2 = 0

                // Products submenu loop
                while (whileFlag2 !== 1) {
                    // Load products from localStorage
                    const productList = loadProducts();
                    option = objectMenu()

                    switch (option) {
                        case 1:
                            // Register a new product
                            productRegister(productList)
                            continue
                        case 2:
                            // Show products using for...of
                            showProducts(productList)
                            continue
                        case 3:
                            // Show products using Object.entries
                            showProducstoo(productList)
                            continue
                        case 4:
                            // Group and show products by category
                            showCategory(productList)
                            continue
                        case 5:
                            // Exit products menu
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag2 = 1
                    }
                }
                break

            // Sets management section
            case 2:
                let whileFlag3 = 0

                // Sets submenu loop
                while (whileFlag3 !== 1) {
                    // Initialize a Set (duplicates are ignored)
                    const numbers = new Set([5, 19, 25, 37, 6, 5])
                    console.log(numbers)

                    option = setMenu()

                    switch (option) {
                        case 1:
                            // Add a number to the set
                            addNumber(numbers)
                            continue
                        case 2:
                            // Check if a number exists in the set
                            verifyNumbers(numbers)
                            continue
                        case 3:
                            // Display all values in the set
                            showSet(numbers)
                            continue
                        case 4:
                            // Remove a number from the set
                            deleteNumber(numbers)
                            continue
                        case 5:
                            // Exit sets menu
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag3 = 1
                    }
                }
                break

            // Exit application
            case 3:
                alert("Thank you for using our services")
                alert("Exiting...")
                whileFlag = 1
        }
    }
}

// Displays the main menu and validates user input
function principalMenu() {
    const option = validateInteger(
        "\n----- PRINCIPAL MENU -----\n\n1. Products managment\n2. Sets managment\n3. Exit \nEnter an option: \n", 1, 3)
    return option
}

// Displays the products submenu
function objectMenu() {
    const option = validateInteger(
        "\n----- PRINCIPAL MENU -----\n\n1. Add a product\n2. Show products\n3. Show products \n4. Show categories\n5. Exit \nEnter an option: \n", 1, 5)
    return option
}

// Displays the sets submenu
function setMenu() {
    const option = validateInteger(
        "\n----- PRINCIPAL MENU -----\n\n1. Add a number\n2. Verify number\n3. Show set\n4. Delete number\n5. Exit \nEnter an option: \n", 1, 5)
    return option
}

// Creates and stores a new product
function productRegister(products) {
    // Ensure unique product ID
    const id = validateId(products, "Which is going to be the product's unique id?")
    const prodName = validateName("Enter product's name")
    const category = validateName("Enter product category");
    const price = validateInteger("Which is the product's price?")

    // Product object structure
    const product = { id, prodName, category, price };

    // Persist product list
    products.push(product)
    saveProducts(products)
};

// Displays products using a dynamic key-value loop
function showProducts(products) {
    // Guard clause for empty lists
    if (!products || products.length === 0) {
        alert("There is no product in the list");
        return;
    }

    for (const product of products) {
        let message = "";

        // Iterate through object properties
        for (const key in product) {
            message += `${key}: ${product[key]}\n`;
        }

        alert(message);
    }
};

// Alternative product display using Object.entries
function showProducstoo(products) {
    products.forEach(product => {
        let message = "";

        // Destructure key-value pairs
        for (const [key, value] of Object.entries(product)) {
            message += `${key}: ${value}\n`;
        }

        alert(message);
    });
}

// Groups products by category using a Map
function showCategory(products) {
    const categoryMap = new Map();

    // Build category-product relationship
    products.forEach(product => {
        if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, []);
        }
        categoryMap.get(product.category).push(product.prodName);
    });

    // Display grouped data
    categoryMap.forEach((value, key) => {
        alert(`Category: ${key}\nProduct: ${value}`);
    });
};

// Adds a number to the set
function addNumber(set) {
    const newNumber = validateInteger("Which number you wanna add?")
    set.add(newNumber)

    alert("Adding...")
    alert("The number is now in the set")

    return set
};

// Checks if a number exists in the set
function verifyNumbers(set) {
    let verifyNumber = validateInteger("Which number you wanna verify if it's in the set?")
    verifyNumber = set.has(verifyNumber)

    if (verifyNumber) {
        alert("The set contains this number")
    } else {
        alert("The number isn't in the set")
    }
};

// Displays each value in the set
function showSet(set) {
    for (const number of set) {
        alert(number)
    }
};

// Removes a number from the set
function deleteNumber(set) {
    const element = Number(prompt("Which element do you want to delete?"))
    const deleteElement = set.delete(element)

    // Check deletion result
    if (deleteElement === false) {
        alert("The element isn't in the set")
    } else {
        alert("The element has been removed")
    }
};

// Validates unique numeric IDs
function validateId(products, message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

        // Validate integer range and uniqueness
        if (Number.isInteger(value) && (min === null || value >= min) && (max === null || value <= max)) {
            const idExists = products.some(element => element.id === value);

            if (idExists) {
                alert("There's a product that has the same id, try with a new one");
            } else {
                return value;
            }
        }

        alert("Invalid option, enter a valid option");
    }
};

// Generic integer validator with optional range
function validateInteger(message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

        if (Number.isInteger(value) && (min === null || value >= min) && (max === null || value <= max)) {
            return value;
        }

        alert("Invalid option, enter a valid option");
    }
};

// Validates alphabetic input only
function validateName(message) {
    while (true) {
        fullName = prompt(message);

        if (fullName === null) {
            alert("Action cancelled");
            return null;
        }

        fullName = fullName.trim();

        if (fullName === "") {
            alert("You need to enter a name");
            continue;
        }

        // Allow only letters
        if (!/^[a-zA-Z]+$/.test(fullName)) {
            alert("The field must include only letters");
            continue;
        }

        return fullName;
    }
};

// Retrieves products from localStorage
function loadProducts() {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
};

// Saves products to localStorage
function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
};
