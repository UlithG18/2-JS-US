main()

function main() {
    alert("Welcome to the Managment Lab");
    console.log("Welcome to Training Lab");

    whileFlag = 0

    while (whileFlag !== 1) {
        option = principalMenu()

        switch (option) {
            case 1:
                while (whileFlag !== 1) {
                    const productList = {}
                    option = objectMenu()

                    switch (option) {
                        case 1: productRegister()
                            continue
                        case 2:
                            showProduct()
                            continue
                        case 3:
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag = 1
                    }
                }
            case 2:
                while (whileFlag !== 1) {
                    const numbers = new setMenu([5, 19, 25, 37, 6, 5])
                    console.log(numbers)

                    option = setMenu()

                    switch (option) {
                        case 1:
                            addNumber()
                            continue
                        case 2:
                            verifyNumbers()
                            continue
                        case 3:
                            showSet(numbers)
                            continue
                        case 4:
                            deleteNumber()
                            continue
                        case 5:
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag = 1
                    }
                }
            case 3:
                while (whileFlag !== 1) {
                    const numbers = new setMenu([5, 19, 25, 37, 6, 5])
                    console.log(numbers)

                    option = mapMenu()

                    switch (option) {
                        case 1:
                            addNumber()
                            continue
                        case 2:
                            verifyNumbers()
                            continue
                        case 3:
                            showSet(numbers)
                            continue
                        case 4:
                            deleteNumber()
                            continue
                        case 5:
                            alert("Thank you for using our services")
                            alert("Exiting...")
                            whileFlag = 1
                    }
                }
            case 4:
                alert("Thank you for using our services")
                alert("Exiting...")
                whileFlag = 1
        }
    }
}

function principalMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Create an Object\n2. Create a Set\n3. Create a Map\n4.Exit \nEnter an option: \n", 1, 4)
    return option
}

function objectMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Add a product\n2. Show product\n3.Exit \nEnter an option: \n", 1, 3)
    return option
}

function setMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Add a number\n2. Verify number\n3. Show set\n4.Delete number\n5.Exit \nEnter an option: \n", 1, 5)
    return option
}

function mapMenu() {
    const option = validateInteger("\n----- PRINCIPAL MENU -----\n\n1. Create an Object\n2. Create a Set\n3. Create a Map\n4.Exit \nEnter an option: \n", 1, 4)
    return option
}

function productRegister() {

    productId = validateInteger("Which is going to be the product's unique id?")
    productName = validateName("Enter product's name")
    productPrice = validateInteger("Which is the product's price?")


    productList = {
        id: productId,
        prodName: productName,
        price: productPrice,

    };
    return productList
}

function showProduct() {
    if (productList === null) {
        alert("There is any product in the list")
        return
    } else {
        for (const product in productList) {
            alert(product, productList[product]);
        }
        return
    }
}

function addNumber() {
    newNumber = validateInteger("Which number you wanna add?")
    numbers.add(number)
    alert("Adding...")
    alert("The number is now in the set")

    return
}

function verifyNumbers() {
    verifyNumber = validateInteger("Which number you wanna verify if it's in the set?")
    numbers.has(verifyNumber)
    if (!verifyNumber) {
        alert("The number isn't in the set")
    } else {
        alert("The set contains this number")
    }
}

function showSet(set) {
    for (const n of set) {
        alert(n)
    }
}

function validateInteger(message, min = null, max = null) {
    while (true) {
        const option = prompt(message);

        if (option === null) {
            console.error("Action cancelled by the user");
            return null;
        }

        const value = Number(option.trim());

        if (
            Number.isInteger(value) && (min === null || value >= min) && (max === null || value <= max)
        ) {
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
}