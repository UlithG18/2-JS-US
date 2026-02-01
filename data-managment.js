main()

function main() {
    alert("Welcome to the Managment Lab");
    console.log("Welcome to Managment Lab");
    let whileFlag = 0

    while (whileFlag !== 1) {
        option = principalMenu()

        switch (option) {
            case 1:
                let whileFlag2 = 0
                while (whileFlag2 !== 1) {
                    const productList = loadProducts();
                    option = objectMenu()

                    switch (option) {
                        case 1: productRegister(productList)
                            continue
                        case 2:
                            showProducts(productList)
                            continue
                        case 3:
                            showProducstoo(productList)
                            continue
                        case 4:
                            showCategory(productList)
                            continue
                        case 5:
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag2 = 1
                    }
                }
                break
            case 2:
                let whileFlag3 = 0
                while (whileFlag3 !== 1) {
                    const numbers = new set([5, 19, 25, 37, 6, 5])
                    console.log(numbers)

                    option = setMenu()

                    switch (option) {
                        case 1:
                            addNumber(numbers)
                            continue
                        case 2:
                            verifyNumbers(numbers)
                            continue
                        case 3:
                            showSet(numbers)
                            continue
                        case 4:
                            deleteNumber(numbers)
                            continue
                        case 5:
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag3 = 1
                    }
                }
                break
            case 3:
                alert("Thank you for using our services")
                alert("Exiting...")
                whileFlag = 1
        }
    }
}

function principalMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Products managment\n2. Sets managment\n3. Exit \nEnter an option: \n", 1, 3)
    return option
}

function objectMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Add a product\n2. Show products\n3. Show products \n4. Show categories\n5. Exit \nEnter an option: \n", 1, 5)
    return option
}

function setMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Add a number\n2. Verify number\n3. Show set\n4. Delete number\n5. Exit \nEnter an option: \n", 1, 5)
    return option
}

function productRegister(products) {

    const id = validateId(products, "Which is going to be the product's unique id?")
    const prodName = validateName("Enter product's name")
    const category = validateName("Enter product category");
    const price = validateInteger("Which is the product's price?")


    const product = {
        id,
        prodName,
        category,
        price,
    };

    products.push(product)
    saveProducts(products)
};

function showProducts(products) {
    if (!products || products.length === 0) {
        alert("There is no product in the list");
        return;
    }

    for (const product of products) {
        let message = "";

        for (const key in product) {
            message += `${key}: ${product[key]}\n`;
        }

        alert(message);
    }
};

function showProducstoo(products) {
    products.forEach(product => {
        let message = "";
        for (const [key, value] of Object.entries(product)) {
            message += `${key}: ${value}\n`;
        }
        alert(message);
    });
}

function showCategory(products) {
    const categoryMap = new Map();

    products.forEach(product => {
        if (!categoryMap.has(product.category)) {
            categoryMap.set(product.category, []);
        }
        categoryMap.get(product.category).push(product.prodName);

    });

    categoryMap.forEach((value, key) => {
        alert(`Category: ${key}\nProduct: ${value}`);
    });
};

function addNumber(set) {
    const newNumber = validateInteger("Which number you wanna add?")
    set.add(newNumber)
    alert("Adding...")
    alert("The number is now in the set")
    return set
};

function verifyNumbers(set) {
    let verifyNumber = validateInteger("Which number you wanna verify if it's in the set?")
    verifyNumber = set.has(verifyNumber)
    if (verifyNumber) {
        alert("The set contains this number")
    } else {
        alert("The number isn't in the set")
    }
};

function showSet(set) {
    for (const number of set) {
        alert(number)
    }
};

function deleteNumber(set) {
    const element = Number(prompt("Which element do you want to delete?"))
    const deleteElement = set.delete(element)

    if (deleteElement === false) {
        alert("The element isn't in the set")
    } else {
        alert("The element has been removed")
    }
};

function validateId(products, message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

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

        if (!/^[a-zA-Z]+$/.test(fullName)) {
            alert("The field must include only letters");
            continue;
        }

        return fullName;
    }
};

function loadProducts() {
    const data = localStorage.getItem("products");
    return data ? JSON.parse(data) : [];
};

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
};