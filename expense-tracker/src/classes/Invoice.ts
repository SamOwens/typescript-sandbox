 export class Invoice {

    constructor(
      readonly client: string,
      private details: string,
      public amount: number
    ) {}
  
    // Method to format the invoice details into a string
    format() {
      return `${this.client} owes £${this.amount} for ${this.details}`;
    }
  }