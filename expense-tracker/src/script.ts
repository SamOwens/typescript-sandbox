// Interfaces
// If we have a variable in future declating itself as IsPerson, it must have these properties and methods
interface IsPerson {
  name: string;
  age: number; 
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'Sam',
  age: 32,
  speak(text: string): void {
    console.log(text)
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  }
};

let someone: IsPerson;
const greetPerson = (person: IsPerson) => {
  console.log(`Hello ${person.name}`)
}
greetPerson(me);


import { Invoice } from './classes/Invoice.js';

// Create instances of the Invoice class
const invOne = new Invoice('Example Client', 'Web Work', 250);
const invTwo = new Invoice('Example Client 2', 'Web Work', 200);

// Create an array to store Invoice objects
let invoices: Invoice[] = [];
invoices.push(invOne); // Add the first invoice to the array
invoices.push(invTwo); // Add the second invoice to the array

invoices.forEach(invoice => {
  console.log(invoice.client,invoice.amount, invoice.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;

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
