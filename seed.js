const mongoose = require('mongoose');
const Product = require('./models/product');

const products = [
    {
        name:"The blue joy",
        img:'https://images.unsplash.com/photo-1593073862407-a3ce22748763?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 140000,
        desc: "bohat mahenga"
    },
    {
        name:"child life",
        img:'https://images.unsplash.com/photo-1585644198527-05519fdeaf98?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 250000,
        desc: "aukaat ke bahar"
    },
    {
        name:"demon",
        img:'https://images.unsplash.com/photo-1520468164108-7f393c152c59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 70000,
        desc: "useless product"
    },
    {
        name:"childhood",
        img:'https://images.unsplash.com/photo-1493902457347-b96d5dbf7213?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 88000,
        desc: "badiya cheez"
    },
    {
        name:"waves",
        img:'https://images.unsplash.com/photo-1541425353346-6755ab2da592?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 27000,
        desc: "vahiyaad thuuu radddi"
    }
]

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully")
}

module.exports = seedDB;