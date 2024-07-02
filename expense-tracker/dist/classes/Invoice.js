export class Invoice {
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
