const name = 'daniel';

const age = '26';

// object shorthand prop
const user = {
    name,
    age,
    location: 'toronto'
};

console.log(user);


// object destructuring

const product = {
    label: 'notebook',
    price: 3,
    stock: 200,
    salePrice: undefined
};

//can rename a variable and set a default value for a variable
const { label: productLabel, price, rating = 5 } = product;

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
};

transaction('order', product);