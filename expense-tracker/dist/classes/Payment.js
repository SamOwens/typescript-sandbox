export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // Method to format the invoice details into a string
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
