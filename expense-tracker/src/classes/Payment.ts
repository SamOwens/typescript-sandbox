import { HasFormatter } from '../interfaces/HasFormatter';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  // Method to format the invoice details into a string
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}
