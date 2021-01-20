const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

// takes in object, arr, any value and returns JSON string representation 
const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// // takes in JSON string => object
// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON);

// binary data
const dataBuffer = fs.readFileSync('1-json.json');

//turn binary into string
const dataJSON = dataBuffer.toString();

//parse JSON data into an object
const data = JSON.parse(dataJSON);

data.name = 'kim'
data.age = 100

const newData = JSON.stringify(data);

fs.writeFileSync('1-json.json', newData);

console.log(dataBuffer);
console.log(data);

