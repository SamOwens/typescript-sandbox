"use strict";
// Define a class named Invoice
class Invoice {
    // Properties of the Invoice class
    // readonly client: string;
    // private details: string;
    // public by default, but can be explicitly stated.
    // public amount: number;
    // Constructor to initialize the properties
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
invoices.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
const form = document.querySelector('.new-item-form');
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
