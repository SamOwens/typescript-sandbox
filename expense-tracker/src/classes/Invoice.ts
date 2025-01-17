import { HasFormatter } from '../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
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
