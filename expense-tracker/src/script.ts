// Define a class named Invoice
class Invoice {
  // Properties of the Invoice class
  client: string;
  details: string;
  amount: number;

  // Constructor to initialize the properties
  constructor(c: string, d: string, a: number) {
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
let invoices: Invoice[] = [];
invoices.push(invOne); // Add the first invoice to the array
invoices.push(invTwo); // Add the second invoice to the array

// Modify the properties of the invoice instances
invOne.client = 'Sam';
invTwo.amount = 500;

console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// Inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('button')!;

form.addEventListener('submit', (e: Event) => {
e.preventDefault();

console.log(
  type.value, 
  toFrom.value, 
  details.value, 
  amount.valueAsNumber
)

})
