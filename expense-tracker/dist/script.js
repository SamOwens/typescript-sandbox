"use strict";
// Define a class named Invoice
class Invoice {
    // Constructor to initialize the properties
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // Method to format the invoice details into a string
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// Create instances of the Invoice class
const invOne = new Invoice('Example Client', 'Web Work', 250);
const invTwo = new Invoice('Example Client 2', 'Web Work', 200);
// Create an array to store Invoice objects
let invoices = [];
invoices.push(invOne); // Add the first invoice to the array
invoices.push(invTwo); // Add the second invoice to the array
// Modify the properties of the invoice instances
invOne.client = 'Sam';
invTwo.amount = 500;
console.log(invoices);
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const button = document.querySelector('button');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
