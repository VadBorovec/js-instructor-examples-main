// Работем с коллекцией товаров в корзине:
// - getItems()
// - add(product)
// - remove(productName)
// - clear()
// - countTotalPrice()
// - increaseQuantity(productName)
// - decreaseQuantity(productName)

// { name: 'apple', price: 50 }
// { name: 'grape', price: 70 }
// { name: 'lemon', price: 60 }
// { name: 'strawberry', price: 110 }

const cart = {
    items: [],
    getItems() { },
    add(product) { },
    remove(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productName) { },
    decreaseQuantity(productName) { },
};

// console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawbrry', price: 110 });

// console.table(cart.getItems());

// cart.remove('apple');
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.increaseQuantity('apple');
// console.table(cart.getItems());

// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// console.table(cart.getItems());
